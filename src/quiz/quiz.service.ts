import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz, QuizDocument } from './schemas/quiz.schema';

@Injectable()
export class QuizService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<QuizDocument>) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    return new this.quizModel(createQuizDto).save();
  }

  async findAll() {
    return this.quizModel.find();
  }

  async findOne(id: string) {
    return this.quizModel.findOne({ id });
  }

  async update(id: string, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    return this.quizModel.findOneAndUpdate({ id }, updateQuizDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return this.quizModel.remove({ id });
  }
}
