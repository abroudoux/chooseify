import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDocument } from '../schemas/user.schema';
import { UserDetails } from '../interfaces/user-details.interface';


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel : Model<UserDocument>) {};

    _getUserDetails(user : UserDocument) : UserDetails {
        return {
            id : user._id,
            name : user.name,
            email : user.email
        };
    };

    async findByEmail(email)

    async create(name : string, email : string, hashedPassword : string) : Promise<UserDocument> {

        const newUser = new this.userModel({
            name, 
            email, 
            password : hashedPassword
        });

        return newUser.save();
    };

};
