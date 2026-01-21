import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';

@Controller('/messages')
export class MessagesController {
    @Get('')
    listMsg(): string {
        return "Hello from MessagesController!";
    }
    @Get('/:id')
    createMsg(@Param('id') id: string){
        console.log(id);
    }
    @Post('')
    getMsg(@Body() body: CreateMessageDTO) {
        console.log(body.content);
    }
}
