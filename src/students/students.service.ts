import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schemas/students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return new this.studentModel(createStudentDto).save();
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findOne(_id: string) {
    return this.studentModel.findOne({ _id });
  }

  // eslint-disable-next-line prettier/prettier
  async update(_id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentModel.findOneAndUpdate({ _id }, updateStudentDto);
  }

  async remove(_id: string) {
    return this.studentModel.remove({ _id });
  }
}
