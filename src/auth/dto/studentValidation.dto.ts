import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class StudentValidation {
  @ApiProperty()
  @IsDefined()
  id: string;
}
