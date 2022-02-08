import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'tytoadmin',
    });
  }

  async validateTeacher(id: string) {
    const user = await this.authService.validateTeacherByJwt(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async validateStudent(id: string) {
    const user = await this.authService.validateStudentByJwt(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
