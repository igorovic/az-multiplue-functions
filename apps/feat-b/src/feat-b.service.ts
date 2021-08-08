import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatBService {
  getHello(): string {
    return 'Feature B!';
  }
}
