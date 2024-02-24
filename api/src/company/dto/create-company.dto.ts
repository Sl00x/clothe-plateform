import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { User } from "src/user/entities/user.entity";

export class CreateCompanyDto {
  @ApiProperty({
    example: "Acme Corporation",
    description: "Nom de la société",
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: "123456789",
    description: "Numéro SIRET de la société",
  })
  @IsNotEmpty()
  @IsString()
  siret: string;

  @ApiProperty({
    example: "123 Main Street",
    description: "Adresse de la société",
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ example: "France", description: "Pays de la société" })
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty({ example: "75001", description: "Code postal de la société" })
  @IsNotEmpty()
  @IsString()
  postalCode: string;

  @ApiProperty({
    example: "+1 123-456-7890",
    description: "Numéro de téléphone de la société",
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  user: User;
}
