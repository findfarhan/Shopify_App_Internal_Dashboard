import { CanActivate, ExecutionContext, Injectable,  UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Env } from '../config';
import { User } from 'src/auth/auth.entity';

//auth middleware to check if user is authorized
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const user = await this.jwtService.verifyAsync(token, {
          secret: Env.jwt_secret,
        });

      if (!user) {
        throw new UnauthorizedException();
      }

      const user_id = user['_id'];
      let isUserExist = await User.findByPk(user_id);
      if (!isUserExist) {
        throw new UnauthorizedException();
      }

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
