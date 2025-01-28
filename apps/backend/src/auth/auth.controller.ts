import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
}
