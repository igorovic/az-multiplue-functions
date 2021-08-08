import { AzureHttpRouter } from '@nestjs/azure-func-http';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FeatBModule } from './feat-b.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(FeatBModule, new AzureHttpRouter());
  app.setGlobalPrefix('api');

  await app.init();
  return app;
}
