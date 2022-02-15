import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MaxLength } from 'class-validator';

export type QuizDocument = Quiz & Document;

@Schema()
export class Quiz {
  @Prop()
  @MaxLength(7)
  id: string;

  @Prop()
  quiz_name: string;

  @Prop()
  question: string;

  @Prop()
  sectionName: string;

  @Prop()
  isType: string;

  @Prop()
  answer: Array<string>;

  @Prop()
  choices: Array<string>;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
