import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PostgresqlModule } from './database';
import { IoRedisModule, WeatherTrafficModule } from './modules';

@Module({
  imports: [PostgresqlModule, IoRedisModule, WeatherTrafficModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
