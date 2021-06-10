/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* origin está aberta para todos somente em carater de desenvolvimento e teste */
  app.enableCors({
    origin: '*',
  });
  await app.listen(3000);
}

bootstrap();
