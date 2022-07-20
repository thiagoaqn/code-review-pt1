import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Session } from './session';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    AuthService,
    Session,
  ]
})
export class AuthModule {}
