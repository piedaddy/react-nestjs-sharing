import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // bc Users and Auth have a circular dependency
    private readonly usersService: UsersService,
  ) {}

  public async login(payload: LoginDto) {
    // find the user via payload info
    const user = await this.usersService.findOneByEmail(payload.email);

    // if (!user) {
    //   return;
    // }
    console.log('user in login', user);
    // if found, compare password with hashed password
    //@todo - add password hashing
    if (user && user.password === payload.password) {
      return user;
    }

    return false;

    // if matched, sign in
  }
}
