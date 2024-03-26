import { Module } from '@nestjs/common';
import { CompetitionRoomService } from './competitionRoom.service';
import { CompetitionRoomController } from './competitionRoom.controller';
import { SequelizeModule } from '@nestjs/sequelize'; 
import { CompetitionRoom } from './competitionRoom.entity';
import { JwtAuthService } from 'src/shared/services/jwt-auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([CompetitionRoom])],
  
  controllers:[CompetitionRoomController],
  providers: [CompetitionRoomService, JwtAuthService, JwtService],

  
})
export class CompetitionRoomModule {}
