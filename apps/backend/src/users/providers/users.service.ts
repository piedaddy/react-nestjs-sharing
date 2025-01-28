import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly hashingProvider: HashingProvider,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    let existingUser = undefined;
    try {
      existingUser = await this.usersRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
    //if user exists =>
    if (existingUser) {
      throw new Error('there is already a user with that email');
    }
    //if user doesnt exist =>
    let newUser = this.usersRepository.create({
      ...createUserDto,
      password: await this.hashingProvider.hashPassword(createUserDto.password),
    });
    try {
      newUser = await this.usersRepository.save(newUser);
    } catch (error) {
      console.log('saving new user error', error);
      throw new RequestTimeoutException(`error saving the new user`, {
        description: `couldn't save new user`,
      });
    }
    return newUser;
  }

  public async getUserById(id: number) {
    try {
      const foundUser = await this.usersRepository.findOneBy({ id });
      console.log('foundUser', foundUser);
      return foundUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findOneByEmail(email: string) {
    try {
      const foundUser = await this.usersRepository.findOneBy({ email });
      console.log('foundUser', foundUser);
      return foundUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateUser(updateUserDto: UpdateUserDto) {
    try {
      const existingUser = await this.usersRepository.findOneBy({
        id: updateUserDto.id,
      });
      if (existingUser) {
        existingUser.firstName =
          updateUserDto?.firstName ?? existingUser.firstName;
        existingUser.lastName =
          updateUserDto?.lastName ?? existingUser.lastName;

        return this.usersRepository.save(existingUser);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
