import { Controller, Get } from '@nestjs/common';
import { FeatBService } from './feat-b.service';

@Controller('b')
export class FeatBController {
  constructor(private readonly featBService: FeatBService) {}

  @Get()
  getHello(): string {
    return this.featBService.getHello();
  }
}
