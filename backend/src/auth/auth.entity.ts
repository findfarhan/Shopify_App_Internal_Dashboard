import * as bcrypt from 'bcrypt';
import { Table, Unique, Column, Model, DataType, PrimaryKey, Default, AllowNull, BeforeCreate, BeforeUpdate } from 'sequelize-typescript';
import { EnumUserType } from 'src/shared/enums';


//user entity
@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @AllowNull(false)
  @Column({ type: DataType.UUID })
  id: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  first_name: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  last_name: string;

  @AllowNull(false)
  @Unique({
    name: 'email_unique_constraint',
    msg: 'Email must be unique.',
  })
  @Column({ type: DataType.STRING })
  email: string;


  @AllowNull(true)
  @Column({ type: DataType.STRING })
  phone_no: string;

  @AllowNull(false)
  @Column({ type: DataType.STRING })
  password: string;

  @AllowNull(true)
  @Column({ type: DataType.DATE })
  DOB:Date

  @AllowNull(true)
  @Column({ type: DataType.ENUM(...Object.values(EnumUserType)) })
  user_type:string
  
  
  @Column({ type: DataType.FLOAT, defaultValue:0  })
  total_credit:number

  @Column({ type: DataType.FLOAT, defaultValue:0 })
  total_tickets:number

  @AllowNull(true)
  @Column({ type: DataType.TEXT })
  token: string

  @AllowNull(true)
  @Column({ type: DataType.BIGINT })
  token_expiry: number

  @BeforeCreate
  static async hashPassword(instance: User) {
    if (instance.password) {
      const salt = await bcrypt.genSaltSync(10);
      instance.password = bcrypt.hashSync(instance.password, salt);
    }
  }

  @BeforeUpdate
  static async hashedPassword(instance: User) {
    const salt = await bcrypt.genSaltSync(10);
    instance.password = bcrypt.hashSync(instance.password, salt);
  }
}
