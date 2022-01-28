import { Injectable } from '@nestjs/common';
import { TeachersService } from 'src/teachers/teachers.service';

@Injectable()
export class AuthService {
  constructor(private teachersService: TeachersService) {}

  async validateTeacher(id: string, password: string): Promise<any> {
    const teacher = await this.teachersService.login(id);

    if (teacher && teacher.password === password) {
      return teacher;
    }
    return null;
  }
}
