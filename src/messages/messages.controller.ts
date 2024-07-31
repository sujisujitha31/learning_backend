import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getAllMessages()
    {
    
    }
    @Post()
    createMessage()
    {
        console.log("they created a new mesage");
    }

    @Get('/:id')
    getParticularMessage()
    {

    }

}
