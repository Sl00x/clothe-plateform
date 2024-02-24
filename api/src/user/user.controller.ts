import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UnauthorizedException,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { AuthUserDto } from "./dto/auth-user.dto";
import { User } from "./entities/user.entity";
import { JwtAuth } from "src/jwt-auth.decorator";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post("auth")
  signIn(@Body() loginDto: AuthUserDto) {
    return this.userService.signIn(loginDto.email, loginDto.password);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Patch(":id")
  update(
    @JwtAuth() user: User,
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ) {
    if (!user) throw new UnauthorizedException();
    return this.userService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.delete(id);
  }
}
