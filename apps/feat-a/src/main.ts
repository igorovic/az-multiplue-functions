import { AzureHttpRouter } from '@nestjs/azure-func-http';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FeatAModule } from './feat-a.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(FeatAModule, new AzureHttpRouter());
  app.setGlobalPrefix('api');

  await app.init();
  return app;
}
