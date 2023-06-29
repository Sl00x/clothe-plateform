import { Test, TestingModule } from '@nestjs/testing';
import { BoatController } from './boat.controller';
import { BoatService } from './boat.service';

describe('BoatController', () => {
  let controller: BoatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoatController],
      providers: [BoatService],
    }).compile();

    controller = module.get<BoatController>(BoatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
