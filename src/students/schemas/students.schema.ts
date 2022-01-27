import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  @PrimaryGeneratedColumn('uuid')
  @MaxLength(7)
  id: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  middleInitial: string;

  @Prop()
  suffix: string;

  @Prop()
  personalEmail: string;

  @Prop()
  sectionName: string;

  @Prop()
  yearLevel: string;

  @Prop()
  schoolYear: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
