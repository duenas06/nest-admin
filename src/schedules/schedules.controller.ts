import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { SchedulesService } from './schedules.service';

@ApiTags('Schedules')
@Controller('schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) {}

    @Post('create_schedule')
    create(@Body() createScheduleDto: CreateScheduleDto) {
      return this.schedulesService.create(createScheduleDto);
    }
  
    @Get('schedules_list')
    findAll() {
      return this.schedulesService.findAll();
    }
  
    @Get('get_schedule/:id')
    findOne(@Param('id') id: string) {
      return this.schedulesService.findOne(id);
    }
  
    @Put('update_schedule/:id')
    update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
      return this.schedulesService.update(id, updateScheduleDto);
    }
  
    @Delete('remove_schedule/:id')
    remove(@Param('id') id: string) {
      return this.schedulesService.remove(id);
    }
}
