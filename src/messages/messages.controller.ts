import { Controller, Get, Post,Body, Param,Query,Header } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { MessagesService } from './messages.services';
@Controller('messages')
export class MessagesController {


    messagesService:MessagesService;
    constructor()
    {
        // DONOT DO THIS REAL APPS
        // USE DEPENDENCY INJECTION
        this.messagesService=new MessagesService();
    }

    @Get()
    getAllMessages()
    {
    return this.messagesService.findAll();
    }
    @Post()
    createMessage(@Body() body:CreateMessageDto)
    {
        console.log("they created a new mesage");
        console.log(body);
        return this. messagesService.create(body.content);
    }

    @Get('/:id')
    getParticularMessage(@Param('id') id:string)
    {
console.log(id);
return this.messagesService.findOne(id);
    } 

}
