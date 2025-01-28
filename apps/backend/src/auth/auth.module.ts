import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService, // this obj is bc HashingProvider is abstract, and used in BcryptProvider
    { provide: HashingProvider, useClass: BcryptProvider },
  ],
  exports: [HashingProvider],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
