import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CompetitionRoom } from './competitionRoom.entity';

@Injectable()
export class CompetitionRoomService {
  async insertCompetitionRoom(requestBody: any) {
    try{
      const newCompetitionRoom = await CompetitionRoom.create({
          category_id: requestBody.categoryId,
          title: requestBody.title,
          total_tickets: requestBody.totalTickets,
          start_date: requestBody.startDate,
          validity_days: requestBody.validityDays,
          ticket_price: requestBody.ticketPrice,
          media: requestBody.media,
          description: requestBody.description,
          type: requestBody.type,
          buyout_enabled: requestBody.buyoutEnabled,
          buyout_worth: requestBody.buyoutWorth
      });
      return newCompetitionRoom;
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  async listCompetitions() {
    try{
      const competitionRoom = await CompetitionRoom.findAll({
        where: { is_deleted: false },
        order: [['createdAt', 'DESC']]
      });
      return competitionRoom;
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  async deleteCompetitionRoom(competitionId: string) {
    try{
      const competitionRoom = await CompetitionRoom.findOne({
        where:{
          id: competitionId
        }
      });
      
      if(!competitionRoom){
        throw new NotFoundException('Invalid Compeitition Room Id');
      }
      
      const deletedCompetitionRoom = await CompetitionRoom.update(
      {
        is_deleted: true
      },
      {
        where: { id: competitionId },
        returning: true
      });
      return deletedCompetitionRoom[1][0];
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  async updateCompetitionRoom(requestBody: any) {
    try{
      const competitionRoom = await CompetitionRoom.findOne({
        where:{
          id: requestBody.id
        }
      });

      if(!competitionRoom){
        throw new NotFoundException('Invalid Compeitition Room Id');
      }
      const updatedCompetitionRoom = await CompetitionRoom.update(
      {
        category_id: requestBody.categoryId,
        title: requestBody.title,
        total_tickets: requestBody.totalTickets,
        start_date: requestBody.startDate,
        validity_days: requestBody.validityDays,
        ticket_price: requestBody.ticketPrice,
        media: requestBody.media,
        description: requestBody.description,
        type: requestBody.type,
        buyout_enabled: requestBody.buyoutEnabled,
        buyout_worth: requestBody.buyoutWorth,
      },
      {
        where: { id: requestBody.id },
        returning: true,
      });
      return updatedCompetitionRoom[1][0];
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }
}
