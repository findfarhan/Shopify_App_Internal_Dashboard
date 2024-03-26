import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe,  BadRequestException} from '@nestjs/common';
import { CompetitionRoomService } from './competitionRoom.service';
import { DTOCreateCompetitionRoom, DTODeleteCompetitionRoom, DTOUpdateCompetitionRoom} from './dto';
import { EnumAPIResponseStatusType } from 'src/shared/enums';
import { GetObjectTemplateForAPIResponseGeneral } from 'src/shared/data_templates/ObjectTemplateForAPIResponse';
import { AuthGuard } from 'src/shared/middlewares/authGuad.middleware';

@Controller('competitionroom')
export class CompetitionRoomController {
  constructor( private competitionRoomService: CompetitionRoomService) { }

  @Post('/create')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async createCompetitionRoom(@Body() body: DTOCreateCompetitionRoom) {
    try{
        return GetObjectTemplateForAPIResponseGeneral(
        EnumAPIResponseStatusType.SUCCESS, await this.competitionRoomService.insertCompetitionRoom(body), undefined);
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  @Get('/list')
  @UseGuards(AuthGuard)
  async listCompetitionRooms() {
    try{
      return GetObjectTemplateForAPIResponseGeneral(
      EnumAPIResponseStatusType.SUCCESS,
      await this.competitionRoomService.listCompetitions(), undefined);
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  @Post('/delete')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async deleteCompetitionRoom(@Body() body: DTODeleteCompetitionRoom) {
    try{
        return GetObjectTemplateForAPIResponseGeneral(
        EnumAPIResponseStatusType.SUCCESS,
        await this.competitionRoomService.deleteCompetitionRoom(body.id), undefined);
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }

  @Post('/update')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async updateCompetitionRoom(@Body() body: DTOUpdateCompetitionRoom) {
    try{
        return GetObjectTemplateForAPIResponseGeneral(
        EnumAPIResponseStatusType.SUCCESS,
        await this.competitionRoomService.updateCompetitionRoom(body), undefined);
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }
}
