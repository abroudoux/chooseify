import { Module } from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersModule } from 'src/user/user.module';


@Module({
    imports: [
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {};
