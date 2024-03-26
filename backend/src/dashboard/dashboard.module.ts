import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dashboard } from './dashboard.entity';
import { JwtAuthService } from 'src/shared/services/jwt-auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Dashboard]),
  ],

  controllers: [DashboardController],
  providers: [
    DashboardService,
    JwtAuthService,
    JwtService,
  ],
})
export class DashboardModule {}
