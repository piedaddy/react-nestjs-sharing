import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
export declare class UsersService {
    private readonly usersRepository;
    private readonly hashingProvider;
    constructor(usersRepository: Repository<User>, hashingProvider: HashingProvider);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto): Promise<User>;
}
