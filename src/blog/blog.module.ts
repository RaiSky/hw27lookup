import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import {CarController} from './car.controller'
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/blog.schema';
import { CarService } from './car.service';
import { from } from 'rxjs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: userSchema }]),
    MongooseModule.forFeature([{ name: 'Cars', schema: userSchema }])
  ],
  controllers: [BlogController,CarController],
  providers: [BlogService,CarService]
})
export class BlogModule { }