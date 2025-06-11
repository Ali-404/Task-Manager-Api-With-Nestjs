import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { LoggerMiddleware } from "./middlewares/logger.middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//  validation pipe
  app.useGlobalPipes(new ValidationPipe())
//  logger middleware
  app.use(new LoggerMiddleware().use);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
