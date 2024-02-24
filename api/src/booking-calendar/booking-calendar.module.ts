import { Module } from '@nestjs/common';
import { BookingCalendarService } from './booking-calendar.service';
import { BookingCalendarController } from './booking-calendar.controller';

@Module({
  controllers: [BookingCalendarController],
  providers: [BookingCalendarService]
})
export class BookingCalendarModule {}
