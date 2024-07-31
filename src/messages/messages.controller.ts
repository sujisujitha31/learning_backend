import { Controller, Get, Post,Body, Param,Query,Header } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    getAllMessages()
    {
    
    }
    @Post()
    createMessage(@Body() body:any)
    {
        console.log("they created a new mesage");
        console.log(body);
    }

    @Get('/:id')
    getParticularMessage(@Param('id') id:String)
    {
console.log(id);
    }

}
