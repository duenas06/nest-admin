import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, MaxLength } from 'class-validator';
import { PrimaryGeneratedColumn, Column } from 'typeorm';
export class CreateTeacherDto {
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
}
