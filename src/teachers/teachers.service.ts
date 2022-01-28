import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeacherLogin } from './dto/login.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teachers.schema';
import { Teachers } from './teacher.interface';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
    @InjectModel('Teacher') private loginModel: Model<Teachers>,
  ) {}

  async login(id): Promise<Teachers> {
    return this.loginModel.findOne({ id: id });
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return new this.teacherModel(createTeacherDto).save();
  }

  async findAll() {
    return this.teacherModel.find();
  }

  async findOne(id: string) {
    return this.teacherModel.findOne({ id });
  }

  // eslint-disable-next-line prettier/prettier
  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    return this.teacherModel.findOneAndUpdate({ id }, updateTeacherDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.teacherModel.remove({ id });
  }
}
