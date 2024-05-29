import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { GetLocationDto } from './dtos';
import { WeatherTrafficService } from './weather-traffic.service';

@ApiTags('weather-traffic')
@Controller('weather-traffic')
export class WeatherTrafficController {
  constructor(private weatherTrafficService: WeatherTrafficService) {}

  @ApiOperation({ summary: 'API search for weather and traffic locations' })
  @Get()
  @HttpCode(200)
  async searchLocation(@Query() query: GetLocationDto) {
    return this.weatherTrafficService.searchLocation(query);
  }
}
