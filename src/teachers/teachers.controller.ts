import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherLogin } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  // This route will require successfully passing our default auth strategy (JWT) in order
  // to access the route
  @Get('test')
  @UseGuards(AuthGuard())
  testAuthRoute() {
    return {
      message: 'You did it!',
    };
  }

  @Post('create_account')
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get('accounts_list')
  findAll() {
    return this.teachersService.findAll();
  }

  @Get('get_account/:id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(id);
  }

  @Put('update_account/:id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(id, updateTeacherDto);
  }

  @Delete('remove_account/:id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(id);
  }
}
