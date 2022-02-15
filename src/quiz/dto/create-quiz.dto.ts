import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { Column } from 'typeorm';
export class CreateQuizDto {
  @ApiProperty()
  @IsDefined()
  id: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  quiz_name: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  question: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  sectionName: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  isType: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  answer: Array<string>;

  @ApiProperty()
  @Column()
  @IsDefined()
  choices: Array<string>;
}
