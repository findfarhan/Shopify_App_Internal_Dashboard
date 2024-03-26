import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { EnumAPIResponseStatusType } from 'src/shared/enums';
import { GetObjectTemplateForAPIResponseGeneral } from 'src/shared/data_templates/ObjectTemplateForAPIResponse';
import { AuthGuard } from 'src/shared/middlewares/authGuad.middleware';

@Controller('dashboard')
export class DashboardController {
  constructor(
    private DashboardService: DashboardService,
  ) {}

  @Get('/list')
  @UseGuards(AuthGuard)
  async list() {
    return GetObjectTemplateForAPIResponseGeneral(
      EnumAPIResponseStatusType.SUCCESS,
      await this.DashboardService.list(),
      null,
    );
  }
}
