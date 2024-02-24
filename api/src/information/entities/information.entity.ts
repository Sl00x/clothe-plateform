import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../../user/entities/user.entity";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@ApiTags("User Information")
@Entity("information")
export class Information {
  @ApiProperty({
    example: "1",
    description: "Identifiant unique de l'information",
  })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ApiProperty({ example: "Doe", description: "Nom de famille" })
  @Column({ type: "text" })
  lastName: string;

  @ApiProperty({ example: "John", description: "Prénom" })
  @Column({ type: "text" })
  firstName: string;

  @ApiProperty({ example: "123 Main Street", description: "Adresse" })
  @Column({ type: "text" })
  address: string;

  @ApiProperty({ example: "12345", description: "Code postal" })
  @Column({ type: "text" })
  postalCode: string;

  @ApiProperty({ example: "France", description: "Pays" })
  @Column({ type: "text" })
  country: string;

  @ApiProperty({ example: "+123456789", description: "Numéro de téléphone" })
  @Column({ type: "text" })
  phone: string;

  @ApiProperty({
    example: "http://example.com/avatar.jpg",
    description: "URL de l'avatar",
  })
  @Column({ type: "text" })
  avatar: string;

  @OneToOne(() => User, (user) => user.information)
  @JoinColumn()
  user: User;
}
