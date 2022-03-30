import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, MaxLength } from 'class-validator';
import { PrimaryGeneratedColumn, Column } from 'typeorm';
export class CreateScheduleDto {
  @ApiProperty()
  @IsDefined()
  @MaxLength(7)
  id: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  sectionName: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  time: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  day: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  yearLevel: string;
}
