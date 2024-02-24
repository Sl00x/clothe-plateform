import * as bcrypt from "bcrypt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { UpdateUserDto } from "src/user/dto/update-user.dto";
import { MD5 } from "crypto-js";

export const passcrypt = async (data: CreateUserDto) => {
  const encryptedPassword = MD5(data.password).toString();
  return encryptedPassword;
};
