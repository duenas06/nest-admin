import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeacherLogin } from '../teachers/dto/login.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('teacher/login')
  async loginTeacher(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateTeacherByPassword(loginUserDto);
  }

  @Post('student/login')
  async loginStudent(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateStudentByPassword(loginUserDto);
  }
}
