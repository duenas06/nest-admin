import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @Exclude()
  _id: string;
}
