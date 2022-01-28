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

  async login(id: string): Promise<Teacher> {
    return this.teacherModel.findOne({ id });
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
