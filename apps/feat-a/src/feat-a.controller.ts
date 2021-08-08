import { Controller, Get } from '@nestjs/common';
import { FeatAService } from './feat-a.service';

@Controller('a')
export class FeatAController {
  constructor(private readonly featAService: FeatAService) {}

  @Get()
  getHello(): string {
    return this.featAService.getHello();
  }
}
