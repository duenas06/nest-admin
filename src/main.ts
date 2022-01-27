import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_VERSION } from './shared/utils/constants.util';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('tyto');
  const config = new DocumentBuilder()
    .setTitle('Admin Crud')
    .setDescription('Rest API for Admin User')
    .setVersion(API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
