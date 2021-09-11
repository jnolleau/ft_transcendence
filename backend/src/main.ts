import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as fs from "fs";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: ["http://localhost:8080", "http://127.0.0.1:8080"]
  }); // Mandatory to interact w vue js which is on a different port

  //Setting up the OpenApi to generate client sdk
  const config = new DocumentBuilder()
    .setTitle('ft_transcendence API')
    .setDescription('Because we are the best')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // To save the api specification in root
  fs.writeFileSync("./api-spec.json", JSON.stringify(document));

  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();
