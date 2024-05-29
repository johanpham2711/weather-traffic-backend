import { Injectable } from '@nestjs/common';
import { ITrafficImagesWithName } from 'src/interfaces';
import { fetchTrafficImages, fetchWeatherForecast, matchForecastWeather, matchNearestArea } from 'src/utils';

import { RedisService } from '../redis';
import { ReportService } from '../report/report.service';

import { GetLocationDto } from './dtos';

@Injectable()
export class WeatherTrafficService {
  constructor(private readonly redisService: RedisService, private readonly reportService: ReportService) {}
  async searchLocation(query: GetLocationDto): Promise<ITrafficImagesWithName[]> {
    const { dateTime } = query;

    const cacheData = await this.redisService.get(dateTime);
    if (cacheData) {
      return JSON.parse(cacheData);
    }

    const [trafficImagesData, weatherForecastData] = await Promise.all([
      fetchTrafficImages(dateTime),
      fetchWeatherForecast(dateTime),
    ]);

    const cameras = trafficImagesData.items[0].cameras;
    const areaMetadata = weatherForecastData.area_metadata;
    const forecasts = weatherForecastData.items[0].forecasts;
    const locationNameSet = new Set();

    const locationsWithName = cameras.map((camera) => {
      let locationName = matchNearestArea(areaMetadata, camera.location);
      const forecastWeather = matchForecastWeather(forecasts, locationName);

      if (locationNameSet.has(locationName)) {
        locationName = `${locationName} (Cam #${camera.camera_id})`;
      }
      locationNameSet.add(locationName);

      return {
        ...camera,
        locationName,
        forecastWeather,
      };
    });

    await this.redisService.setExpire(dateTime, JSON.stringify(locationsWithName));

    return locationsWithName;
  }
}
