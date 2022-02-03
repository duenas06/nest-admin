import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { StudentsModule } from 'src/students/students.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TeachersModule,
    StudentsModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secretOrPrivateKey: 'tytoadmin',
      signOptions: {
        expiresIn: 86400,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
