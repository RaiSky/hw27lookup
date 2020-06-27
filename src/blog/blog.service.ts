import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/post.interface';
import { Car } from './interfaces/car.interface';
import { CreatePostDTO } from './dto/create-post.dto';
import {CreateCarDTO} from './dto/create-car.dto';

@Injectable()
export class BlogService {

    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>        
    ) { } 
    

    async getUsers(): Promise<User[]> {        
        return await this.userModel.aggregate([
            {
                $lookup: {
                    from: 'Сars',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'cars'
                }
            }
        ]);
    }

    async getUser(userID): Promise<User> {
        const user = await this.userModel
            .findById(userID)
            .exec();
        return await this.userModel.aggregate([
            {
                $math: {...user}
            },
            {
                $lookup: {
                    from: 'Cars',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'cars'
                }
            }
        ]);
    }

    async addUser(createPostDTO: CreatePostDTO): Promise<User> {
        const newPost = await this.userModel(createPostDTO);        
        return newPost.save();
    }     

}
