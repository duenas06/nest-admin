import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TeachersService } from 'src/teachers/teachers.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { TeacherLogin } from '../teachers/dto/login.dto';
import { StudentsService } from 'src/students/students.service';
import { StudentLogin } from 'src/students/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private teachersService: TeachersService,
    private studentsService: StudentsService,
    private jwtService: JwtService,
  ) {}

  async validateTeacherByPassword(loginAttempt: TeacherLogin) {
    // This will be used for the initial login
    const teacherToAttempt = await this.teachersService.login(loginAttempt.id);

    if (
      teacherToAttempt &&
      loginAttempt.password === teacherToAttempt.password
    ) {
      return this.createJwtPayload(teacherToAttempt);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateTeacherByJwt(id: string) {
    // This will be used when the teacher has already logged in and has a JWT
    const user = await this.teachersService.findOne(id);
    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateStudentByPassword(loginAttempt: StudentLogin) {
    // This will be used for the initial login
    const studentToAttempt = await this.studentsService.login(loginAttempt.id);

    if (
      studentToAttempt &&
      loginAttempt.password === studentToAttempt.password
    ) {
      return this.createJwtPayload(studentToAttempt);
    } else {
      throw new UnauthorizedException();
    }
  }

  async validateStudentByJwt(id: string) {
    // This will be used when the teacher has already logged in and has a JWT
    const user = await this.studentsService.findOne(id);
    if (user) {
      return this.createJwtPayload(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  createJwtPayload(user) {
    const data: JwtPayload = {
      id: user.id,
    };

    const jwt = this.jwtService.sign(data);

    return {
      expiresIn: 86400,
      token: jwt,
      user,
    };
  }
}
