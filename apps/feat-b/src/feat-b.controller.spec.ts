import { Test, TestingModule } from '@nestjs/testing';
import { FeatBController } from './feat-b.controller';
import { FeatBService } from './feat-b.service';

describe('FeatBController', () => {
  let featBController: FeatBController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeatBController],
      providers: [FeatBService],
    }).compile();

    featBController = app.get<FeatBController>(FeatBController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(featBController.getHello()).toBe('Hello World!');
    });
  });
});
