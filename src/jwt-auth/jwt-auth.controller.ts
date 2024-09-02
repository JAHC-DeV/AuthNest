import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { LoginRequest } from './DTOs/loginRequest';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginResponse } from './DTOs/loginResponse';
import { AuthGuard } from 'src/Guards/auth/auth.guard';
import { Request } from 'express';

@Controller('jwt-auth')
export class JwtAuthController {
  constructor(private readonly authService: JwtAuthService) {}
  @Post("/login")
  @ApiTags("Jwt-Auth")
  @ApiBody({type: LoginRequest})
  async login(@Body() loginReq: LoginRequest): Promise<LoginResponse>{
      return await this.authService.login(loginReq);
  }

  @ApiTags("Jwt-Auth")
  @Get("info")
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  async getUserInfo(@Req() req: Request ): Promise<LoginResponse>{    
    return await this.authService.getUserInfo(req["userId"]);
  }
}
