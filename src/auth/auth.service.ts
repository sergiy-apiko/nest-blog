import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  //   private userService: UsersService;
  //   constructor(private moduleRef: ModuleRef) {
  //     this.userService = this.moduleRef.get(UsersService, { strict: false });
  //   }

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user || user.password !== password) return false;

    return user;
  }
  sign(user: User) {
    return {
      access_token: this.jwtService.sign({ sub: user.id, email: user.email }),
    };
  }
  async registerUser(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return this.sign(user);
  }
}
