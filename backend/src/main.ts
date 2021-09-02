import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Mandatory to interact w vue js which is on a different port
  await app.listen(3000);
}
bootstrap();
