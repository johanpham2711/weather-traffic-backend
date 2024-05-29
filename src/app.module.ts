import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PostgresqlModule } from './database';
import { IoRedisModule, ReportModule, WeatherTrafficModule } from './modules';

@Module({
  imports: [PostgresqlModule, IoRedisModule, WeatherTrafficModule, ReportModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
