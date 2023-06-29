import { IsOptional, IsDate, IsEnum, IsNumber } from "class-validator";

export class UpdateBookingCalendarDto {
  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsEnum(["PAID", "WAITING", "DECLINE"])
  status?: "PAID" | "WAITING" | "DECLINE";

  @IsOptional()
  @IsNumber()
  price?: number;
}
