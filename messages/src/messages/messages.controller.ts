import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('/messages')
export class MessagesController {

    constructor(public messagesService: MessagesService){
    }

    @Get('')
    listMsg() {
        return this.messagesService.findAll();
    }
    @Get('/:id')
    async createMsg(@Param('id') id: string){
        const message = await this.messagesService.findOne(id);
        if (!message){
            throw new NotFoundException('message not found');
        }
        return message;
        
    }
    @Post('')
    getMsg(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content);
    }
}
