import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { Column } from 'typeorm';
export class CreateStudentDto {
  @ApiProperty()
  @IsDefined()
  id: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  firstName: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  lastName: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  password: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  middleInitial: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  suffix: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  personalEmail: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  sectionName: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  yearLevel: string;

  @ApiProperty()
  @Column()
  @IsDefined()
  schoolYear: string;
}
