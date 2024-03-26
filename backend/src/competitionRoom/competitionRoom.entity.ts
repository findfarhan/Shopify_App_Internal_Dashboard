import {Table, Column, Model, DataType, PrimaryKey, Default, AllowNull} from 'sequelize-typescript';
import { EnumUserType } from 'src/shared/enums';
import {
  EnumCompetitionRunningStatus,
  EnumCompetitionRoomCategory,
  EnumCompetitionRoomType,
} from 'src/shared/enums/.enum';

//competition room entity
@Table({
  tableName: 'competition_room',
  timestamps: true,
})
export class CompetitionRoom extends Model<CompetitionRoom> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  id: string;

  @Column({
    type: DataType.ENUM(
      ...Object.values(
        EnumCompetitionRoomCategory,
      ),
    ),
  })
  category_id: string;
  
  @Column({ type: DataType.TEXT })
  title: string;

  @Column({ type: DataType.FLOAT })
  total_tickets: number;

  @Column({ type: DataType.DATE })
  start_date: Date;

  @Column({ type: DataType.FLOAT })
  validity_days: number;

  @Column({ type: DataType.FLOAT })
  ticket_price: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  tickets_sold: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  tickets_remaining_to_sold;

  @Column({
    type: DataType.ENUM(
      ...Object.values(
        EnumCompetitionRunningStatus,
      ),
    ),
    defaultValue:
      EnumCompetitionRunningStatus.NOT_STARTED,
  })
  competition_running_status: string;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  total_tickets_removed: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  total_tickets_after_removal: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  current_ticket_price_after_removal: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  buyout_enabled: boolean;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  buyout_worth: number;

  @Column({ type: DataType.JSON })
  media: object;

  @Column({ type: DataType.UUID })
  secondry_competition: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({
    type: DataType.ENUM(
      ...Object.values(EnumCompetitionRoomType),
    ),
  })
  type: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_deleted: boolean;
}
