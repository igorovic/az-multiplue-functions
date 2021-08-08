import { Context, HttpRequest } from '@azure/functions';
import { AzureHttpAdapter } from '@nestjs/azure-func-http';
import { createApp } from '../apps/feat-c/src/main';

export default function (context: Context, req: HttpRequest): void {
  AzureHttpAdapter.handle(createApp, context, req);
}
