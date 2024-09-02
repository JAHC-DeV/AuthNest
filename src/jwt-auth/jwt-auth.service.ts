import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequest } from './DTOs/loginRequest';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './DTOs/loginResponse';

@Injectable()
export class JwtAuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async login(loginReq: LoginRequest): Promise<LoginResponse> {
    const user = await this.userService.findByEmail(loginReq.email);

    if (!user) throw new UnauthorizedException('User not found');
    if (user.password != loginReq.password)
      throw new UnauthorizedException('Password is Wrong');

    const token = await this.jwtService.signAsync({ id: user.id });
    return {
      email: user.email,
      fullName: user.fullName,
      age: user.age,
      token,
    };
  }

  public async getUserInfo(id: number): Promise<LoginResponse> {
    const user = await this.userService.findById(id);
    if(!user)
      throw new BadRequestException("User not found.")
    const newToken = await this.jwtService.signAsync({ id: user.id });
    return {
      email: user.email,
      fullName: user.fullName,
      age: user.age,
      token: newToken,
    };
  }
}
