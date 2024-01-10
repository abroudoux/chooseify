import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "@/app/app.module";


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        whitelist : true,
        transform : true,
    }));
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(4050);
};
bootstrap();
