import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop()
  @MaxLength(7)
  id: string;

  @Prop()
  sectionName: string;

  @Prop()
  time: string;

  @Prop()
  day: string;

  @Prop()
  yearLevel: string;

}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
