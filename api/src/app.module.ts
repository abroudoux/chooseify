import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:{}/chooseify'),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../..', 'client', 'dist'),
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {};
