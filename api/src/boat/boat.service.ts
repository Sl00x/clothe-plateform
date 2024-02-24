import { Injectable } from '@nestjs/common';
import { CreateBoatDto } from './dto/create-boat.dto';
import { UpdateBoatDto } from './dto/update-boat.dto';

@Injectable()
export class BoatService {
  create(createBoatDto: CreateBoatDto) {
    return 'This action adds a new boat';
  }

  findAll() {
    return `This action returns all boat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boat`;
  }

  update(id: number, updateBoatDto: UpdateBoatDto) {
    return `This action updates a #${id} boat`;
  }

  remove(id: number) {
    return `This action removes a #${id} boat`;
  }
}
