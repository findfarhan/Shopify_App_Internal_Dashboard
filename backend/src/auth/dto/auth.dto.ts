import { IsNotEmpty, IsString, IsEmail} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  DOB: Date;

  @IsNotEmpty()
  @IsString()
  userType:string
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SingleUserByEmailDto{
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}

export class forgetPasswordDto{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class resetPasswordDto{
  @IsString()
  @IsNotEmpty()
  password: string;  
}

export class changePasswordDto{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;  
}
