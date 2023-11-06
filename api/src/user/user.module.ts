import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserSchema } from './schemas/user.schema';


@Module({
    imports:[
        MongooseModule.forFeature([{name : 'User', schema : UserSchema}])
    ],
    exports: [
        UserService
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UsersModule {};
