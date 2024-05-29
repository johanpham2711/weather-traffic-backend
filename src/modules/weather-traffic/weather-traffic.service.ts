import { Injectable } from '@nestjs/common';
import { ITrafficImagesWithName } from 'src/interfaces';
import { fetchTrafficImages, fetchWeatherForecast, matchForecastWeather, matchNearestArea } from 'src/utils';

import { GetLocationDto } from './dtos';

@Injectable()
export class WeatherTrafficService {
  async searchLocation(query: GetLocationDto): Promise<ITrafficImagesWithName[]> {
    const { dateTime } = query;
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

    return locationsWithName;
  }
}
