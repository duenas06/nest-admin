import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { LoginDTO } from './dto/login.dto';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@ApiTags('Students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return {};
  }

  @Post('create_account')
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get('accounts_list')
  findAll() {
    return this.studentsService.findAll();
  }

  @Get('get_account/:id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Put('update_account/:id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete('remove_account/:id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
