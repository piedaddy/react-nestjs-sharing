"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user.entity");
const typeorm_2 = require("typeorm");
const hashing_provider_1 = require("../../auth/providers/hashing.provider");
let UsersService = class UsersService {
    constructor(usersRepository, hashingProvider) {
        this.usersRepository = usersRepository;
        this.hashingProvider = hashingProvider;
    }
    async createUser(createUserDto) {
        let existingUser = undefined;
        try {
            existingUser = await this.usersRepository.findOne({
                where: {
                    email: createUserDto.email,
                },
            });
        }
        catch (error) {
            throw new Error(error);
        }
        if (existingUser) {
            throw new Error('there is already a user with that email');
        }
        let newUser = this.usersRepository.create({
            ...createUserDto,
            password: await this.hashingProvider.hashPassword(createUserDto.password),
        });
        try {
            newUser = await this.usersRepository.save(newUser);
        }
        catch (error) {
            console.log('saving new user error', error);
            throw new common_1.RequestTimeoutException(`error saving the new user`, {
                description: `couldn't save new user`,
            });
        }
        return newUser;
    }
    async getUserById(id) {
        try {
            const foundUser = await this.usersRepository.findOneBy({ id });
            console.log('foundUser', foundUser);
            return foundUser;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async findOneByEmail(email) {
        try {
            const foundUser = await this.usersRepository.findOneBy({ email });
            console.log('foundUser', foundUser);
            return foundUser;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async updateUser(updateUserDto) {
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
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hashing_provider_1.HashingProvider])
], UsersService);
//# sourceMappingURL=users.service.js.map