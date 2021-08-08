import { AzureHttpRouter } from '@nestjs/azure-func-http';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FeatCModule } from './feat-c.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(FeatCModule, new AzureHttpRouter());
  app.setGlobalPrefix('api');

  await app.init();
  return app;
}
