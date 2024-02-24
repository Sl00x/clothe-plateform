import { Module } from "@nestjs/common";
import { BoatService } from "./boat.service";
import { BoatController } from "./boat.controller";
import { Boat } from "./entities/boat.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Boat])],
  controllers: [BoatController],
  providers: [BoatService],
})
export class BoatModule {}
