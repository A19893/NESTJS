import { Test, TestingModule } from '@nestjs/testing';
import { RealtorController } from './realtor.controller';

describe('RealtorController', () => {
  let controller: RealtorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealtorController],
    }).compile();

    controller = module.get<RealtorController>(RealtorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
