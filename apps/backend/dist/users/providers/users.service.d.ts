import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto): Promise<User>;
}
