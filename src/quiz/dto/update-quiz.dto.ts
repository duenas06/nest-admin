import { PartialType } from '@nestjs/swagger';
import { CreateQuizDto } from './create-quiz.dto';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @IsOptional()
  @Exclude()
  _id: string;
}
