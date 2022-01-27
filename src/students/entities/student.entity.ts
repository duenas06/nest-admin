import { ApiProperty } from '@nestjs/swagger';
import { classToPlain } from 'class-transformer';
import { IsDefined, MaxLength } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class StudentsEntity {
  @PrimaryGeneratedColumn('uuid')
  @MaxLength(7)
  id: string;
  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  firstName: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  lastName: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  password: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  middleInitial: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  suffix: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  personalEmail: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  sectionName: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  yearLevel: string;

  @MaxLength(254)
  @ApiProperty()
  @Column()
  @IsDefined()
  schoolYear: string;

  toJSON() {
    return classToPlain(this);
  }
}
