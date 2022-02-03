import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeacherLogin } from '../teachers/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { StudentLogin } from 'src/students/dto/login.dto';

@ApiTags('TYTO')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('teacher/login')
  async loginTeacher(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateTeacherByPassword(loginUserDto);
  }

  @Post('teacher/validate')
  async validateTeacher(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateTeacherByPassword(loginUserDto);
  }

  @Post('student/login')
  async loginStudent(@Request() req, @Body() loginUserDto: StudentLogin) {
    return await this.authService.validateStudentByPassword(loginUserDto);
  }

  @Post('student/validate')
  async validateStudent(@Request() req, @Body() loginUserDto: StudentLogin) {
    return await this.authService.validateStudentByJwt(loginUserDto);
  }
}
