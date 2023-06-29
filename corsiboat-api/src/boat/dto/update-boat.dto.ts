import { ApiProperty } from "@nestjs/swagger";
import { PartialType } from "@nestjs/mapped-types";
import { CreateBoatDto } from "./create-boat.dto";
import { BoatType } from "../entities/boat.entity";

export class UpdateBoatDto {
  @ApiProperty({
    example: "ABC123",
    description: "Numéro d'immatriculation du bateau",
    required: false,
  })
  plate: string;

  @ApiProperty({
    example: BoatType.JETSKI,
    description: "Type de bateau",
    enum: BoatType,
  })
  type?: BoatType;

  @ApiProperty({ example: 5, description: "Nombre de places du bateau" })
  place?: number;

  @ApiProperty({
    example: true,
    description: "Autorisation de promenade en mer",
  })
  goForWalk?: boolean;

  @ApiProperty({
    example: true,
    description: "Licence requise pour conduire le bateau",
  })
  license?: boolean;

  @ApiProperty({
    example: false,
    description: "Présence d'un skipper professionnel",
  })
  skipper?: boolean;
}
