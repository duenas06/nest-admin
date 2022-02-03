import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TeacherLogin } from '../teachers/dto/login.dto';
import { ApiTags } from '@nestjs/swagger';
import { StudentValidation } from 'src/students/dto/validation.dto';
import { TeacherValidation } from 'src/teachers/dto/validation.dto';
import { StudentLogin } from 'src/students/dto/login.dto';

@ApiTags('TYTO')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('student/login')
  async loginStudent(@Request() req, @Body() loginUserDto: StudentLogin) {
    return await this.authService.validateStudentByPassword(loginUserDto);
  }

  @Post('student/validate')
  async validateStudent(
    @Request() req,
    @Body() loginUserDto: StudentValidation,
  ) {
    return await this.authService.validateStudentByJwt(loginUserDto);
  }

  @Post('teacher/login')
  async loginTeacher(@Request() req, @Body() loginUserDto: TeacherLogin) {
    return await this.authService.validateTeacherByPassword(loginUserDto);
  }

  @Post('teacher/validate')
  async validateTeacher(
    @Request() req,
    @Body() loginUserDto: TeacherValidation,
  ) {
    return await this.authService.validateTeacherByJwt(loginUserDto);
  }
}
