import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class TeacherLogin {
  @ApiProperty()
  @IsDefined()
  id: string;

  @ApiProperty()
  @IsDefined()
  password: string;
}
