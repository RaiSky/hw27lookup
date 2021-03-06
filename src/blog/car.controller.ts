import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import {CarService} from './car.service';
import { CreateCarDTO } from './dto/create-car.dto';
import * as mongoose from 'mongoose'


@Controller('cars')
export class CarController {

    @Get('allcars')
    async getUsers(@Res() res) {
        const cars = await this.carService.getCars();
        return res.status(HttpStatus.OK).json(cars);
    }
    constructor(private carService: CarService) { }    
    @Post('/car')
    async addCar(@Res() res, @Body() createCarDTO: CreateCarDTO) {
        const newCar = await this.carService.addCar(createCarDTO);
        const userId = new mongoose.Types.ObjectId(createCarDTO.userId);
        console.log(userId);
        return res.status(HttpStatus.OK).json(newCar)
        
    }
}
