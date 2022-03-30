import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule, ScheduleDocument } from './schemas/schedules.schema';

@Injectable()
export class SchedulesService {
    constructor( @InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>,) {}

    async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
        return new this.scheduleModel(createScheduleDto).save();
      }
    
      async findAll() {
        return this.scheduleModel.find();
      }
    
      async findOne(id: string) {
        return this.scheduleModel.findOne({ id });
      }
    
      // eslint-disable-next-line prettier/prettier
      async update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<Schedule> {
        return this.scheduleModel.findOneAndUpdate({ id }, updateScheduleDto, {
          new: true,
        });
      }
    
      async remove(id: string) {
        return this.scheduleModel.remove({ id });
      }
}
