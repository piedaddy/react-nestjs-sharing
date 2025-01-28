import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../dtos/login.dto';
import { UsersService } from 'src/users/providers/users.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService)) // bc Users and Auth have a circular dependency
    private readonly usersService: UsersService,

    private readonly hashingProvider: HashingProvider,
  ) {}

  public async login(payload: LoginDto) {
    const user = await this.usersService.findOneByEmail(payload.email);
    if (!user) {
      return;
    }
    console.log('user in login', user);

    try {
      const isEqual = await this.hashingProvider.comparePassword(
        payload.password,
        user.password,
      );
      if (isEqual) {
        return user;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
