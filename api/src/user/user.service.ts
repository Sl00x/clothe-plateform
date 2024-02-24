import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt";
import { passcrypt } from "utils/pass.crypt";
import { HTTP_CODE_METADATA } from "@nestjs/common/constants";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<string> {
    // Recherche de l'utilisateur par e-mail
    const user: User = await this.userRepository.findOne({
      where: {
        email,
      },
    });

    console.log(user);

    const hashedPassword = await passcrypt({ email, password });
    const userHashedPassword = await passcrypt({
      email: user.email,
      password: user.password,
    });
    // Vérification du mot de passe
    const isPasswordValid: boolean = hashedPassword === userHashedPassword;

    console.log(isPasswordValid);
    // Génération du JWT avec l'identifiant de l'utilisateur
    const payload = { userId: user.id };
    const token: string = this.jwtService.sign(payload);

    return token;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    const result = [];
    for (const user of users) {
      delete user.password;
      result.push(user);
    }
    return result;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    delete user.password;
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (user) throw new HttpException("USER_ALREADY_EXIST", 400);
    const hasehPassword = await passcrypt(createUserDto);
    const createdUser = this.userRepository.create({
      email,
      password: hasehPassword,
    });
    const result = await this.userRepository.save(createdUser);
    delete result.password;
    return result;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new HttpException("USER_NOT_FOUND", 404);
    }

    Object.assign(user, updateUserDto);
    const result = await this.userRepository.save(user);
    delete result.password;
    return result;
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
