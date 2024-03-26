import { Controller, Post, Body, Query, UsePipes, ValidationPipe, BadRequestException, NotFoundException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, LoginDto, SingleUserByEmailDto, forgetPasswordDto, resetPasswordDto, changePasswordDto } from './dto';
import { AuthGuard } from '../shared/middlewares/authGuad.middleware';
import { Get } from '@nestjs/common';
import { GetObjectTemplateForAPIResponseGeneral, ObjectTemplateForAPIResponseGeneral } from 'src/shared/data_templates/ObjectTemplateForAPIResponse';
import { EnumAPIResponseStatusType } from 'src/shared/enums';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  //register user api
  @Post('register')
  @UsePipes(ValidationPipe)
  async registerUser(@Body() registrationDto: UserDto): Promise<typeof ObjectTemplateForAPIResponseGeneral> {
    try {
      return GetObjectTemplateForAPIResponseGeneral(EnumAPIResponseStatusType.SUCCESS, await this.authService.registerUser(registrationDto), undefined);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }



  //login api
  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() loginDto: LoginDto): Promise<typeof ObjectTemplateForAPIResponseGeneral | null> {
    try {
      const user = await this.authService.login(loginDto);
      if (!user) {
        throw new BadRequestException('Invalid email or password');
      }
      return GetObjectTemplateForAPIResponseGeneral(EnumAPIResponseStatusType.SUCCESS, user, undefined);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  //me api
  @Post('me')
  @UsePipes(ValidationPipe)
  async GetSingleUserByEmail(@Body() GetSingleUserByEmailDto: SingleUserByEmailDto): Promise<typeof ObjectTemplateForAPIResponseGeneral | null> {
    try {
      const user = await this.authService.GetSingleUserByEmail(GetSingleUserByEmailDto);
      if(!user){
        throw new NotFoundException('User does not exist');
      }
      return GetObjectTemplateForAPIResponseGeneral(EnumAPIResponseStatusType.SUCCESS, user, undefined);
    } catch (error) {
      throw error;
    }
  }

   //forget password api
   @Post('forgetPassword')
   @UsePipes(ValidationPipe)
   async ForgetPassword(@Body() ForgetPasswordDto: forgetPasswordDto): Promise<any | null> {
     try {
       const data = await this.authService.ForgetPassword(ForgetPasswordDto);
       return {status: EnumAPIResponseStatusType.SUCCESS, data}
     } catch (error) {
       throw error;
     }
   }

    //reset password api
    @Post('resetPassword')
    @UsePipes(ValidationPipe)
    async ResetPassword(@Body() ResetPasswordDto: resetPasswordDto, @Query('token') token: string ): Promise<any | null> {
      try {
          const data = await this.authService.ResetPassword(ResetPasswordDto, token);
          return {status: EnumAPIResponseStatusType.SUCCESS, data}
      } catch (error) {
          throw error;
      }
    }


      //change password api
      @Post('changePassword')
      @UsePipes(ValidationPipe)
      @UseGuards(AuthGuard)
      async ChangePassword(@Body() ChangePasswordDto: changePasswordDto ): Promise<typeof ObjectTemplateForAPIResponseGeneral | null> {
        try {
           const data = await this.authService.ChangePassword(ChangePasswordDto);
            return GetObjectTemplateForAPIResponseGeneral(EnumAPIResponseStatusType.SUCCESS, data, undefined);
        } catch (error) {
            throw error;
        }
      }
  

 

  //get all users api
  @Get('/')
  @UseGuards(AuthGuard)
  async getAllUsers(): Promise<typeof ObjectTemplateForAPIResponseGeneral> {
    try {
      const userList = await this.authService.getAllUsers();
      return GetObjectTemplateForAPIResponseGeneral(EnumAPIResponseStatusType.SUCCESS, userList, undefined)
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
