import { User } from './auth.entity';
import { BadRequestException, NotFoundException, Injectable} from '@nestjs/common';
import { LoginDto,  UserDto, SingleUserByEmailDto, forgetPasswordDto, resetPasswordDto, changePasswordDto} from './dto';
import * as bcrypt from 'bcrypt';
import { JwtAuthService } from 'src/shared/services/jwt-auth.service';
import {CryptoService} from 'src/shared/services/crypto.service';
import { Env } from 'src/shared/config';

@Injectable()
export class AuthService {
  constructor(private readonly jwtAuthService: JwtAuthService, private readonly cryptoService: CryptoService) {}
  
    //check user existence based on email
  async checkIfUserExists(email: string): Promise<User> {
    const user = await User.findOne({
      where: { email }
    });
    return user;
  }

   //Register user
   async registerUser(userDto: UserDto): Promise<any> {
    try {
      const userExists = await this.checkIfUserExists( userDto.email);
      if (userExists) {
        throw new BadRequestException('User with this email already exists');
      }

      const user = await User.create({
        first_name: userDto.firstName,
        last_name: userDto.firstName,
        email: userDto.email,
        password: userDto.password,
        phone_no: userDto.phoneNo,
        DOB: userDto.DOB,
        user_type: userDto.userType,
      });
      const token = await this.jwtAuthService.generateToken(user.dataValues);
      return { user, token };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }


  //login
  async login(loginDto: LoginDto): Promise<any> {
    try{
      const { email, password } = loginDto;
      let user = await User.findOne({
        where: { email },
        attributes:['id', 'first_name', 'last_name','email','phone_no', 'password', 'DOB','user_type','createdAt', 'updatedAt']
      });

      if (!user) {
        throw new BadRequestException('User does not Exist');
      }
      const passwordHash = await bcrypt.compare(password,user.password);
      if (!passwordHash) {
        throw new BadRequestException('Invalid Email or password');
      }

      const token = await this.jwtAuthService.generateToken(user.dataValues);
      return { user, token };
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }


  //me api
  async GetSingleUserByEmail(GetSingleUserByEmailDto: SingleUserByEmailDto): Promise<any>{
    try{
      const user = await User.findOne({
        where:{
            email: GetSingleUserByEmailDto.email
        },
        attributes:['id', 'first_name', 'last_name','email','phone_no', 'password', 'DOB','user_type','createdAt', 'updatedAt']
      });

      if(!user){
        throw new NotFoundException('User Not Exist');
      }

      const token = await this.jwtAuthService.generateToken(user.dataValues);
      return { user, token };
    }
    catch(err){
      throw err;
    }
  }

  //forget password api
  async ForgetPassword(forgetPasswordDto: forgetPasswordDto): Promise<any> {
      try{
        const user = await User.findOne({
          where:{email: forgetPasswordDto.email}
        });
    
        if(user){
          const encryptedData = await this.cryptoService.encrypt(user.dataValues.id, `${Env.jwt_secret}`)
          const encodedToken = encodeURIComponent(encryptedData.encryptedText);
          let link = `${Env.Base_Url}/reset-password?token=` + encodedToken;
          console.log(link,"....");
          await User.update({ token:encodedToken, token_expiry:encryptedData.timestamp }, { where: { id: user.dataValues.id } });                 
          return {messge:'Link Generated Successfully!'};
        }
        else{
          throw new NotFoundException('Email Not Exist');
        }
      }
      catch(error){
        throw error;
      }
  }


  //reset password api
  async ResetPassword(ResetPasswordDto: resetPasswordDto, token: string):Promise<any>{
    try{
      let userToken = encodeURIComponent(token);
      let decryptedText = await this.cryptoService.decrypt(`${token}`, `${Env.jwt_secret}` );
      let userId = `${decryptedText.userId}`;
      let user = await User.findOne({
        where: {
            id: userId
        }
      });

      if(user){
        if(Date.now() < decryptedText.timestamp && userToken== user.dataValues.token)
        {
            const hashPassword = await this.cryptoService.hashpassword(ResetPasswordDto.password);
            await User.update({ password: hashPassword, token:null, token_expiry: null }, { where: { id: userId } });                 
            const token = await this.jwtAuthService.generateToken(user);
            return {token: token, message:'Password Reset Successfully!'}
        }
        else{
            throw new BadRequestException('Reset Password Link has been expired!');
        }
    }
    else{
        throw new NotFoundException('User Not Exist');
    }
    }
    catch(error){
      throw error;
    }
  }

  //change password api
  async ChangePassword(ChangePasswordDto: changePasswordDto):Promise<any> {
    try{
        let user = await User.findOne({
          attributes: ['id', 'first_name', 'last_name', 'email', 'password', 'createdAt', 'updatedAt'],
          where: { email: ChangePasswordDto.email } 
        })

        if (!user) {
          throw new NotFoundException('Invalid Email')
        }
        else {
            const hashpass = await this.cryptoService.hashpassword(ChangePasswordDto.password);
            const token = await this.jwtAuthService.generateToken(user.dataValues);
            await User.update({ password: hashpass }, { where: { id: user.id } })
            return { user, token };
        }
      }
      catch(error){
        throw error;
      }
    }
 
  //View All Users
  async getAllUsers(): Promise<any> {
    try{
      const user = await User.findAll({
        order: [['createdAt', 'DESC']]
      });
      return user;
    }
    catch(err){
      throw new BadRequestException(err.message);
    }
  }
}
