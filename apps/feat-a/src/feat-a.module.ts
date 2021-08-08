import { Module } from '@nestjs/common';
import { FeatAController } from './feat-a.controller';
import { FeatAService } from './feat-a.service';

@Module({
  imports: [],
  controllers: [FeatAController],
  providers: [FeatAService],
})
export class FeatAModule {}
