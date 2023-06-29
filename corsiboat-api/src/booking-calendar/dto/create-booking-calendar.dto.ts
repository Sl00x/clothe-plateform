import { IsUUID, IsDate, IsEnum, IsNumber } from "class-validator";
import { Boat } from "../../boat/entities/boat.entity";

export class CreateBookingCalendarDto {
  @IsUUID()
  boatId: string;

  @IsDate()
  date: Date;

  @IsEnum(["PAID", "WAITING", "DECLINE"])
  status: "PAID" | "WAITING" | "DECLINE";

  @IsNumber()
  price: number;
}
