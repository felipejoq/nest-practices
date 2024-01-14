import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Limpia el objeto de propiedades no necesarias
      forbidNonWhitelisted: true, // Lanza una excepción si tiene propiedades adicionales
    }),
  )

  await app.listen(3000);
}
bootstrap();
