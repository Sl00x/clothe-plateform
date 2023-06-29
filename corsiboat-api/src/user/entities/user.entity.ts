import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Information } from "src/information/entities/information.entity";
import { Company } from "src/company/entities/company.entity";
import { Exclude } from "class-transformer";

@ApiTags("User")
@Entity("user")
export class User {
  @ApiProperty({
    example: "1",
    description: "Identifiant unique de l'utilisateur",
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    example: "john@example.com",
    description: "Adresse e-mail de l'utilisateur",
  })
  @Column({ type: "text" })
  email: string;

  @ApiProperty({
    example: "password123",
    description: "Mot de passe de l'utilisateur",
  })
  @Exclude()
  @Column({ type: "text" })
  password: string;

  @OneToOne(() => Information, (information) => information.user, {
    cascade: true,
  })
  information: Information;

  @OneToMany(() => Company, (company) => company.user)
  companies: Company[];
}
