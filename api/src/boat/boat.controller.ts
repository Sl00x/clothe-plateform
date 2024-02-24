import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BoatService } from "./boat.service";
import { CreateBoatDto } from "./dto/create-boat.dto";
import { UpdateBoatDto } from "./dto/update-boat.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Boat")
@Controller("boat")
export class BoatController {
  constructor(private readonly boatService: BoatService) {}

  @Post()
  create(@Body() createBoatDto: CreateBoatDto) {
    return this.boatService.create(createBoatDto);
  }

  @Get()
  findAll() {
    return this.boatService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.boatService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBoatDto: UpdateBoatDto) {
    return this.boatService.update(+id, updateBoatDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.boatService.remove(+id);
  }
}
