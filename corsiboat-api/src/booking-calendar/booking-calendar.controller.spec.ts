import { Test, TestingModule } from '@nestjs/testing';
import { BookingCalendarController } from './booking-calendar.controller';
import { BookingCalendarService } from './booking-calendar.service';

describe('BookingCalendarController', () => {
  let controller: BookingCalendarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingCalendarController],
      providers: [BookingCalendarService],
    }).compile();

    controller = module.get<BookingCalendarController>(BookingCalendarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
