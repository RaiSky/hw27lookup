import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './interfaces/car.interface';
import {CreateCarDTO} from './dto/create-car.dto';

@Injectable()
export class CarService {

    constructor(@InjectModel('Cars') private readonly carModel: Model<Car>) { } 
    

    async getCars(): Promise<Car[]> {        
        return await this.carModel.find().lean().exec();
    }

    async getCar(userID): Promise<Car> {
        const car = await this.carModel
            .findById({_id:userID})
            .exec();
        return car;
    }

    async addCar(createCarDTO: CreateCarDTO): Promise<Car> {
        const newPost = await this.carModel(createCarDTO);
        return newPost.save();
    }   

}
