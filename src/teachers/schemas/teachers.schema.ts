import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
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

  @Prop({ unique: true })
  personalEmail: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
