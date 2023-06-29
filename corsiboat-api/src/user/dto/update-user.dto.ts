import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class UpdateUserDto {
  @ApiProperty({
    example: "john@example.com",
    description: "Adresse e-mail de l'utilisateur",
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: "password123",
    description: "Mot de passe de l'utilisateur",
  })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;
}
