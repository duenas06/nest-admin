import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TeachersService } from 'src/teachers/teachers.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { TeacherLogin } from '../teachers/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private teachersService: TeachersService,
    private jwtService: JwtService,
  ) {}

  async validateUserByPassword(loginAttempt: TeacherLogin) {
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

    // return new Promise((resolve) => {
    //   // Check the supplied password against the hash stored for this id
    //   teacherToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
    //     if (err) throw new UnauthorizedException();

    //     if (isMatch) {
    //       // If there is a successful match, generate a JWT for the user
    //       resolve(this.createJwtPayload(teacherToAttempt));
    //     } else {
    //       throw new UnauthorizedException();
    //     }
    //   });
    // });
  }

  async validateUserByJwt(payload: JwtPayload) {
    // This will be used when the user has already logged in and has a JWT
    const user = await this.teachersService.login(payload.id);
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
      expiresIn: 3600,
      token: jwt,
      user,
    };
  }
}
