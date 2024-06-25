import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { createUser } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    // Get a user
    // Endpoint: localhost:3000/user/:id
    @Get(':id')
    async get(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
        return await this.userService.getUserById(id);
    }

    // Create a user
    // Endpoint: localhost:3000/user
    @Post()
    async create(@Body() createUser: createUser){
        return await this.userService.createUser(createUser);
    }
}
