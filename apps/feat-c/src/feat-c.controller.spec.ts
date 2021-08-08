import { Test, TestingModule } from '@nestjs/testing';
import { FeatCController } from './feat-c.controller';
import { FeatCService } from './feat-c.service';

describe('FeatCController', () => {
  let featCController: FeatCController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeatCController],
      providers: [FeatCService],
    }).compile();

    featCController = app.get<FeatCController>(FeatCController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(featCController.getHello()).toBe('Hello World!');
    });
  });
});
