import { Boat } from "src/boat/entities/boat.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";

@Entity()
export class BookingCalendar {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "enum", enum: ["PAID", "WAITING", "DECLINE"] })
  status: "PAID" | "WAITING" | "DECLINE";

  @Column({ type: "float" })
  price: number;

  @OneToOne(() => Boat, (boat) => boat.bookingCalendar)
  @JoinColumn()
  boat: Boat;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;
}
