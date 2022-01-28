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
import { LoginDTO } from './dto/login.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@ApiTags('Teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.teacher;
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
