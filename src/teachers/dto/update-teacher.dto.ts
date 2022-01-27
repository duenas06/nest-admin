import { PartialType } from '@nestjs/swagger';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
  @IsOptional()
  @Exclude()
  _id: string;
}
