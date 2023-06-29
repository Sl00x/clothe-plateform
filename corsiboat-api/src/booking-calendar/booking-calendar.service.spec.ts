import { Test, TestingModule } from '@nestjs/testing';
import { BookingCalendarService } from './booking-calendar.service';

describe('BookingCalendarService', () => {
  let service: BookingCalendarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingCalendarService],
    }).compile();

    service = module.get<BookingCalendarService>(BookingCalendarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
