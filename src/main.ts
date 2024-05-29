import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { AppModule } from './app.module';
import { HttpExceptionFilter, TransformInterceptor, ValidationPipe } from './common';
import { application, swaggerConfig } from './configs';
import { ENVS_ALLOW_DOCS } from './constants';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  // global nest setup
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());

  // Starts listening to shutdown hooks
  app.enableShutdownHooks();

  // config
  app.setGlobalPrefix(application.urlPrefix);

  // swagger
  ENVS_ALLOW_DOCS.includes(application.environment) && swaggerConfig(app);

  await app.listen(application.serverPort);
  console.log(`Application is running on ${application.serverPort}`);
}

bootstrap();
