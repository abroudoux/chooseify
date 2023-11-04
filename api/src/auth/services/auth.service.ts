import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/interfaces/user-details.interface';

import { UserService } from 'src/user/services/user.service';


@Injectable()
export class AuthService {

    constructor(private userService : UserService) {};

    async hashPassword(password : string) : Promise<string> {
        return bcrypt.hash(password, 12);
    };

    async register(user : Readonly<NewUserDTO>) : Promise<UserDetails | null> {
        const { name, email, password } = user;

        const existingUser =
    };

};
