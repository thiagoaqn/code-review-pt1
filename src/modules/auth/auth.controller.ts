import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Token } from './token';
import { User } from './user';


@Controller('/login')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/')
  authenticate(@Body() user: User): Token {
    return this.service.authenticate(user);
  }
}
