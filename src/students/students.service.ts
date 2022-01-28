import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schemas/students.schema';
import { Students } from './student.interface';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    @InjectModel('Student') private loginModel: Model<Students>,
  ) {}

  async login(id): Promise<Students> {
    return this.loginModel.findOne({ id: id });
  }
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return new this.studentModel(createStudentDto).save();
  }

  async findAll() {
    return this.studentModel.find();
  }

  async findOne(id: string) {
    return this.studentModel.findOne({ id });
  }

  // eslint-disable-next-line prettier/prettier
  async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    return this.studentModel.findOneAndUpdate({ id }, updateStudentDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.studentModel.remove({ id });
  }
}
