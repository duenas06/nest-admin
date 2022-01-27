import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher, TeacherDocument } from './schemas/teachers.schema';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
  ) {}
  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return new this.teacherModel(createTeacherDto).save();
  }

  async findAll() {
    return this.teacherModel.find();
  }

  async findOne(_id: string) {
    return this.teacherModel.findOne({ _id });
  }

  // eslint-disable-next-line prettier/prettier
  async update(_id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    return this.teacherModel.findOneAndUpdate({ _id }, updateTeacherDto);
  }

  async remove(_id: string) {
    return this.teacherModel.remove({ _id });
  }
}
