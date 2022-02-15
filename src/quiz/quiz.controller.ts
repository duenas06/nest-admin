import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quiz')
@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('create_quiz')
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.create(createQuizDto);
  }

  @Get('quiz_list')
  findAll() {
    return this.quizService.findAll();
  }

  @Get('get_quiz/:id')
  findOne(@Param('id') id: string) {
    return this.quizService.findOne(id);
  }

  @Put('update_quiz/:id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.update(id, updateQuizDto);
  }

  @Delete('remove_quiz/:id')
  remove(@Param('id') id: string) {
    return this.quizService.remove(id);
  }
}
