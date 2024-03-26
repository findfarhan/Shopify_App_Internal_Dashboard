import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'dashboard',
  timestamps: true,
})
export class Dashboard extends Model<Dashboard> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  id: string;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  tickets_sold: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  outstanding_tickets: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  all_competitions: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  competitions_not_started: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  competitions_not_continued: number;

  @Column({
    type: DataType.FLOAT,
    defaultValue: 0,
  })
  competitions_completed: number;

  @Column({ type: DataType.FLOAT })
  total_profit: number;

  @Column({ type: DataType.FLOAT })
  total_users: number;

  @Column({ type: DataType.FLOAT })
  current_assets: number;

  @Column({ type: DataType.FLOAT })
  total_active_currency_tokens: number;
}
