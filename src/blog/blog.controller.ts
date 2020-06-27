import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import {CarService} from './car.service';
import { CreateCarDTO } from './dto/create-car.dto';


@Controller('users')
export class BlogController {

    constructor(private blogService: BlogService) { }

    // Fetch all posts
    @Get('allusers')
    async getUsers(@Res() res) {
        const users = await this.blogService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    // Submit a post
    @Post('/user')
    async addUser(@Res() res, @Body() createPostDTO: CreatePostDTO) {
        const newUser = await this.blogService.addUser(createPostDTO);
        return res.status(HttpStatus.OK).json(newUser)
    }

}
