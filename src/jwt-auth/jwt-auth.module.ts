import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthController } from './jwt-auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[JwtModule.register({
    global: true,
    secret: "some secret",
    signOptions: {expiresIn: '60s'}
  })],
  controllers: [JwtAuthController],
  providers: [JwtAuthService,UsersService],
})
export class JwtAuthModule {}
