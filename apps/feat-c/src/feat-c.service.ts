import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatCService {
  getHello(): string {
    return 'Feat C!';
  }
}
