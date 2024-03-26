import { Module, OnModuleInit} from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { Env } from './shared/config';
import { CompetitionRoomController } from './competitionRoom/competitionRoom.controller';
import { CompetitionRoomModule } from './competitionRoom/competitionRoom.module';
import { CompetitionRoomService } from './competitionRoom/competitionRoom.service';
import { JwtAuthService } from './shared/services/jwt-auth.service';
import {CryptoService} from './shared/services/crypto.service';
import { JwtService } from '@nestjs/jwt';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: Env.DATABASE_HOST,
      port: 5432,
      username: Env.DATABASE_USER,
      password: Env.DATABASE_PASSWORD,
      database: Env.DATABASE_NAME,
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    AuthModule,
    CompetitionRoomModule,
    DashboardModule,
  ],
  controllers: [
    AppController,
    CompetitionRoomController,
    DashboardController,
  ],
  providers: [
    CompetitionRoomService,
    JwtAuthService,
    CryptoService,
    JwtService,
    DashboardService,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private sequelize: Sequelize) {}

  async onModuleInit() {
    try {
      await this.sequelize.sync({ alter: true });
      console.log(
        'Database synchronized successfully',
      );
    } catch (error) {
      console.error(
        'Database synchronization failed:',
        error,
      );
    }
  }
}
