import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); //config
  }
  async validate(id: string, password: string): Promise<any> {
    const teacher = this.authService.validateTeacher(id, password);

    if (!teacher) {
      throw new UnauthorizedException();
    }

    return teacher;
  }
}
