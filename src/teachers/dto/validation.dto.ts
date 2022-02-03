import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class TeacherValidation {
  @ApiProperty()
  @IsDefined()
  id: string;
}
