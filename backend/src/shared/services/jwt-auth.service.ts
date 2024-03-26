import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {Env} from '../config';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: JwtService) {}

  //create a token
  async generateToken(user): Promise<string> {
    const payload = { _id: user.id};
    const options = {
      expiresIn: '1d', 
      secret: Env.jwt_secret, 
    };

    return this.jwtService.sign(payload,options);
  }

  async getUserFromToken(token:string): Promise<any> {
    return this.jwtService.decode(token);
  }

}
