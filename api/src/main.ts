import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AppModule } from "@/app/app.module";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
    .setTitle('Chooseify API')
    .setDescription('Connect Notion & Spotify')
    .setVersion('0.1')
    .build();

    app.useGlobalPipes(new ValidationPipe({
        whitelist : true,
        transform : true,
    }));


    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(4050);
};
bootstrap();
