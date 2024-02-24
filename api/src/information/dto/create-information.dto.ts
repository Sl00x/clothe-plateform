import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateInformationDto {
  @ApiProperty({ example: "Doe", description: "Nom de famille" })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: "John", description: "Prénom" })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: "123 Main Street", description: "Adresse" })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: "12345", description: "Code postal" })
  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @ApiProperty({ example: "France", description: "Pays" })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({ example: "+123456789", description: "Numéro de téléphone" })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: "http://example.com/avatar.jpg",
    description: "URL de l'avatar",
  })
  @IsString()
  @IsNotEmpty()
  avatar: string;
}
