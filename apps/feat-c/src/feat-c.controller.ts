import { Controller, Get } from '@nestjs/common';
import { FeatCService } from './feat-c.service';

@Controller('c')
export class FeatCController {
  constructor(private readonly featCService: FeatCService) {}

  @Get()
  getHello(): string {
    return this.featCService.getHello();
  }
}
