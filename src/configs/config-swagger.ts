import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('NestJS Weather Traffic API')
    .setDescription('This is the API documentation for Weather Traffic!')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
};