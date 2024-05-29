import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PostgresqlModule } from './database';
import { IoRedisModule } from './modules';

@Module({
  imports: [PostgresqlModule, IoRedisModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
