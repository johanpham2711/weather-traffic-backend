import { Module } from '@nestjs/common';

import { WeatherTrafficController } from './weather-traffic.controller';
import { WeatherTrafficService } from './weather-traffic.service';

@Module({
  imports: [],
  controllers: [WeatherTrafficController],
  providers: [WeatherTrafficService],
  exports: [WeatherTrafficService],
})
export class WeatherTrafficModule {}
