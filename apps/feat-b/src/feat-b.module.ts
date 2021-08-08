import { Module } from '@nestjs/common';
import { FeatBController } from './feat-b.controller';
import { FeatBService } from './feat-b.service';

@Module({
  imports: [],
  controllers: [FeatBController],
  providers: [FeatBService],
})
export class FeatBModule {}
