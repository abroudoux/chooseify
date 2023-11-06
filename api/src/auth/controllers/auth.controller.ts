import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';


@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService) {};

    @Post('register')
    register(@Body() user : NewUserDTO) : Promise<UserDetails | null > {
        return this.authService.register(user);
    };

};
