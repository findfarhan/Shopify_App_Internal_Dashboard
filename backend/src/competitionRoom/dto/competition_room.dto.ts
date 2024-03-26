import { IsNotEmpty, IsString, IsNumber, IsBoolean, IsObject, IsOptional} from 'class-validator';

export class DTOCreateCompetitionRoom {
  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  totalTickets: number;

  @IsString()
  startDate: Date;

  @IsNumber()
  validityDays: number;

  @IsNumber()
  ticketPrice: number;

  @IsObject()
  media;

  @IsOptional()
  @IsString()
  secondryCompetition: string;

  @IsString()
  description: string;

  @IsString()
  type: string;

  @IsBoolean()
  buyoutEnabled: boolean;

  @IsNumber()
  buyoutWorth: number;
}
export class DTODeleteCompetitionRoom {
  @IsString()
  @IsNotEmpty()
  id: string;
}
export class DTOUpdateCompetitionRoom {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  categoryId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNumber()
  totalTickets: number;

  @IsString()
  startDate: Date;

  @IsNumber()
  validityDays: number;

  @IsNumber()
  ticketPrice: number;

  @IsObject()
  media;

  @IsOptional()
  @IsString()
  secondryCompetition: string;

  @IsString()
  description: string;

  @IsString()
  type: string;

  @IsBoolean()
  buyoutEnabled: boolean;

  @IsNumber()
  buyoutWorth: number;
}
