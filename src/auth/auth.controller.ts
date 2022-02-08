import { Controller, Post, Body, Request, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { StudentLogin } from './dto/studentLogin.dto';
import { StudentValidation } from './dto/studentValidation.dto';
import { TeacherLogin } from './dto/teacherLogin.dto';
import { TeacherValidation } from './dto/teacherValidation.dto';

@ApiTags('TYTO')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('student/login')
  async loginStudent(@Request() req, @Body() loginUserDto: StudentLogin) {
    return await this.authService.validateStudentByPassword(loginUserDto);
  }

  @Post('student/validate/:id')
  async validateStudent(@Param('id') id: string) {
    return await this.authService.validateStudentByJwt(id);
  }

  @Post('teacher/login')
  async loginTeacher(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateTeacherByPassword(loginUserDto);
  }

  @Post('teacher/validate/:id')
  async validateTeacher(@Param('id') id: string) {
    return await this.authService.validateTeacherByJwt(id);
  }
}
