import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Company } from "../../company/entities/company.entity";
import { ApiProperty } from "@nestjs/swagger";
import { BookingCalendar } from "src/booking-calendar/entities/booking-calendar.entity";

export enum BoatType {
  YACHT = "Yacht",
  SAILBOAT = "Sailboat",
  SPEEDBOAT = "Speedboat",
  CATAMARAN = "Catamaran",
  JETSKI = "Jet Ski",
  KAYAK = "Kayak",
  CANOE = "Canoe",
  PONTOON = "Pontoon",
  FISHING_BOAT = "Fishing Boat",
  HOUSEBOAT = "Houseboat",
  // Add all the necessary boat types
}

@Entity()
export class Boat {
  @ApiProperty({ example: "1", description: "Identifiant unique du bateau" })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    example: "ABC123",
    description: "Numéro d'immatriculation du bateau",
    required: false,
  })
  @Column({ nullable: true })
  plate: string;

  @ApiProperty({
    example: BoatType.JETSKI,
    description: "Type de bateau",
    enum: BoatType,
  })
  @Column({ type: "enum", enum: BoatType })
  type?: BoatType;

  @ApiProperty({ example: 5, description: "Nombre de places du bateau" })
  @Column()
  place: number;

  @ApiProperty({
    example: true,
    description: "Autorisation de promenade en mer",
    default: true,
  })
  @Column({ default: true })
  goForWalk: boolean;

  @ApiProperty({
    example: true,
    description: "Licence requise pour conduire le bateau",
    default: true,
  })
  @Column({ default: true })
  license: boolean;

  @ApiProperty({
    example: false,
    description: "Présence d'un skipper professionnel",
    default: false,
  })
  @Column({ default: false })
  skipper: boolean;

  @ApiProperty({
    type: () => Company,
    description: "Société à laquelle appartient le bateau",
  })
  @ManyToOne(() => Company, (company) => company.boats)
  @JoinColumn()
  company: Company;

  @OneToOne(() => BookingCalendar, (bookingCalendar) => bookingCalendar.boat)
  bookingCalendar: BookingCalendar;
}
