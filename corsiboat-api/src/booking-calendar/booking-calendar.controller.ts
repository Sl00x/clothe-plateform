import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingCalendarService } from './booking-calendar.service';
import { CreateBookingCalendarDto } from './dto/create-booking-calendar.dto';
import { UpdateBookingCalendarDto } from './dto/update-booking-calendar.dto';

@Controller('booking-calendar')
export class BookingCalendarController {
  constructor(private readonly bookingCalendarService: BookingCalendarService) {}

  @Post()
  create(@Body() createBookingCalendarDto: CreateBookingCalendarDto) {
    return this.bookingCalendarService.create(createBookingCalendarDto);
  }

  @Get()
  findAll() {
    return this.bookingCalendarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingCalendarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingCalendarDto: UpdateBookingCalendarDto) {
    return this.bookingCalendarService.update(+id, updateBookingCalendarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingCalendarService.remove(+id);
  }
}
