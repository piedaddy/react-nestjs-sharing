import { UsersService } from './providers/users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUserById(id: number): Promise<import("./user.entity").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    updateUser(updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
}
