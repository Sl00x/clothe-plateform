import { ApiProperty } from "@nestjs/swagger";
import { BoatType } from "../entities/boat.entity";

export class CreateBoatDto {
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
  place: number;

  @ApiProperty({
    example: true,
    description: "Autorisation de promenade en mer",
    default: true,
  })
  goForWalk: boolean;

  @ApiProperty({
    example: true,
    description: "Licence requise pour conduire le bateau",
    default: true,
  })
  license: boolean;

  @ApiProperty({
    example: false,
    description: "Présence d'un skipper professionnel",
    default: false,
  })
  skipper: boolean;
}
