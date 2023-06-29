import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";
import { Boat } from "src/boat/entities/boat.entity";

@Entity()
export class Company {
  @ApiProperty({
    example: "1",
    description: "Identifiant unique de la société",
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({
    example: "Acme Corporation",
    description: "Nom de la société",
  })
  @Column()
  name: string;

  @ApiProperty({
    example: "123456789",
    description: "Numéro SIRET de la société",
  })
  @Column()
  siret: string;

  @ApiProperty({
    example: "123 Main Street",
    description: "Adresse de la société",
  })
  @Column()
  address: string;

  @ApiProperty({ example: "France", description: "Pays de la société" })
  @Column()
  country: string;

  @ApiProperty({ example: "75001", description: "Code postal de la société" })
  @Column()
  postalCode: string;

  @ApiProperty({
    example: "+1 123-456-7890",
    description: "Numéro de téléphone de la société",
  })
  @Column()
  phone: string;

  @OneToOne(() => User, (user) => user.companies)
  @JoinColumn()
  user: User;

  @ApiProperty({
    type: () => Company,
    description: "Société à laquelle appartient le bateau",
  })
  @OneToMany(() => Boat, (boat) => boat.company)
  boats: Boat[];
}
