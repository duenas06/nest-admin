import { PartialType } from '@nestjs/swagger';
import { CreateScheduleDto } from './create-schedule.dto';
import { IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateScheduleDto extends PartialType(CreateScheduleDto) {
  @IsOptional()
  @Exclude()
  _id: string;
}
