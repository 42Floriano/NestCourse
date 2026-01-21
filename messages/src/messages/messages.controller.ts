import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
    @Get('')
    listMsg(): string {
        return "Hello from MessagesController!";
    }
    @Get('/:id')
    createMsg(): string {
        return "Hello from MessagesController!";
    }
    @Post('')
    getMsg(): string {
        return "Hello from MessagesController!";
    }
}
