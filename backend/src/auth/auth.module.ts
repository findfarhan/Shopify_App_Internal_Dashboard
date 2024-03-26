import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
 import { User} from './auth.entity';
import { SequelizeModule } from '@nestjs/sequelize'; 
import { JwtAuthService } from '../shared/services/jwt-auth.service';
import {CryptoService} from '../shared/services/crypto.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([User])], 
  controllers: [AuthController],
  providers: [AuthService, JwtAuthService, JwtService, CryptoService], 
})
export class AuthModule {}
