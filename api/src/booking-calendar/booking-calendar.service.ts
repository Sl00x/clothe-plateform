import { Injectable } from '@nestjs/common';
import { CreateBookingCalendarDto } from './dto/create-booking-calendar.dto';
import { UpdateBookingCalendarDto } from './dto/update-booking-calendar.dto';

@Injectable()
export class BookingCalendarService {
  create(createBookingCalendarDto: CreateBookingCalendarDto) {
    return 'This action adds a new bookingCalendar';
  }

  findAll() {
    return `This action returns all bookingCalendar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookingCalendar`;
  }

  update(id: number, updateBookingCalendarDto: UpdateBookingCalendarDto) {
    return `This action updates a #${id} bookingCalendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookingCalendar`;
  }
}
