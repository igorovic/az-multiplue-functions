import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatAService {
  getHello(): string {
    return 'Feature A!';
  }
}
