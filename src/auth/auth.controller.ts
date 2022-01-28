import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeacherLogin } from '../teachers/dto/login.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('teacher/login')
  async login(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateUserByPassword(loginUserDto);
  }
}
