import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Entry module would be "AppModule"
  await app.listen(3000);
}
bootstrap(); // Entry point for the whole application
