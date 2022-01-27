import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty } from '@nestjs/swagger';
import { classToPlain, Exclude } from 'class-transformer';
import { IsDefined, IsOptional, MaxLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsOptional()
  @Exclude()
  _id: string;
}
