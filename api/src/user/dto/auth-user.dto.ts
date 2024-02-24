import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthUserDto {
  @ApiProperty({
    example: "john@example.com",
    description: "Adresse e-mail de l'utilisateur",
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "password123",
    description: "Mot de passe de l'utilisateur",
  })
  @IsString()
  @MinLength(6)
  password: string;
}
