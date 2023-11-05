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

    async register(user : Readonly<NewUserDTO>) : Promise<UserDetails | any > {
        const { name, email, password } = user;

        const existingUser = await this.userService.findByEmail(email);

        if (existingUser) return 'Email already taken!';

        const hashedPassword = await this.hashPassword(password);

        const newUser = await this.userService.create(name, email, hashedPassword);

        return this.userService._getUserDetails(newUser);
    };

};
