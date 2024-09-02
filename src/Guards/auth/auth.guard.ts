import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UtilsGlobals } from 'src/utils/utilsGlobals';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private jwtService:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const headers = request['headers'];
    const authorization = headers.authorization;
    if (!authorization)
      throw new UnauthorizedException('Unauthorized, please login');
    const token = UtilsGlobals.getTokenBearer(authorization);
    const {id} =  this.jwtService.decode(token);
    request.userId = id;
    return true;
  }
}
