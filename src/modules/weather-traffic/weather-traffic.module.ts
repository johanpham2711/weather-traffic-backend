import { Module } from '@nestjs/common';

import { IoRedisModule } from '../redis';
import { ReportModule } from '../report';

import { WeatherTrafficController } from './weather-traffic.controller';
import { WeatherTrafficService } from './weather-traffic.service';

@Module({
  imports: [IoRedisModule, ReportModule],
  controllers: [WeatherTrafficController],
  providers: [WeatherTrafficService],
  exports: [WeatherTrafficService],
})
export class WeatherTrafficModule {}
