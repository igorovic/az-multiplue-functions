import { Module } from '@nestjs/common';
import { FeatCController } from './feat-c.controller';
import { FeatCService } from './feat-c.service';

@Module({
  imports: [],
  controllers: [FeatCController],
  providers: [FeatCService],
})
export class FeatCModule {}
