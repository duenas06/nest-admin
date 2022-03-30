import { ApiProperty } from '@nestjs/swagger';
import { classToPlain } from 'class-transformer';
import { IsDefined, MaxLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Schedule')
export class ScheduleEntity {
  @ApiProperty()
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

  toJSON() {
    return classToPlain(this);
  }
}
