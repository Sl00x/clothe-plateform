import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateInformationDto {
  @ApiProperty({ example: "Doe", description: "Nom de famille" })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({ example: "John", description: "Prénom" })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: "123 Main Street", description: "Adresse" })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: "12345", description: "Code postal" })
  @IsString()
  @IsOptional()
  postalCode?: string;

  @ApiProperty({ example: "France", description: "Pays" })
  @IsString()
  @IsOptional()
  country?: string;

  @ApiProperty({ example: "+123456789", description: "Numéro de téléphone" })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    example: "http://example.com/avatar.jpg",
    description: "URL de l'avatar",
  })
  @IsString()
  @IsOptional()
  avatar?: string;
}
