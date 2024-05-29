import { Module } from '@nestjs/common';

import { IoRedisModule } from '../redis';

import { WeatherTrafficController } from './weather-traffic.controller';
import { WeatherTrafficService } from './weather-traffic.service';

@Module({
  imports: [IoRedisModule],
  controllers: [WeatherTrafficController],
  providers: [WeatherTrafficService],
  exports: [WeatherTrafficService],
})
export class WeatherTrafficModule {}
