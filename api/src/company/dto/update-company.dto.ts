import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateCompanyDto {
  @ApiProperty({
    example: "Acme Corporation",
    description: "Nom de la société",
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: "123456789",
    description: "Numéro SIRET de la société",
  })
  @IsOptional()
  @IsString()
  siret?: string;

  @ApiProperty({
    example: "123 Main Street",
    description: "Adresse de la société",
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: "France", description: "Pays de la société" })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({ example: "75001", description: "Code postal de la société" })
  @IsOptional()
  @IsString()
  postalCode?: string;

  @ApiProperty({
    example: "+1 123-456-7890",
    description: "Numéro de téléphone de la société",
  })
  @IsOptional()
  @IsString()
  phone?: string;
}
