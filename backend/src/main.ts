import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
} from '@nestjs/swagger';
import { Env } from './shared/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
export let app: NestExpressApplication;

async function bootstrap() {
  app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  const port = Env.PORT;

  const swagConfig = new DocumentBuilder()
    .setTitle('shopify')
    .setDescription('shopify api description')
    .setVersion('1.0')
    .addTag('')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(
    app,
    swagConfig,
  );
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.use(express.static('public'));
  await app.listen(port);
}
bootstrap();
