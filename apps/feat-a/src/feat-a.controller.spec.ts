import { Test, TestingModule } from '@nestjs/testing';
import { FeatAController } from './feat-a.controller';
import { FeatAService } from './feat-a.service';

describe('FeatAController', () => {
  let featAController: FeatAController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeatAController],
      providers: [FeatAService],
    }).compile();

    featAController = app.get<FeatAController>(FeatAController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(featAController.getHello()).toBe('Hello World!');
    });
  });
});
