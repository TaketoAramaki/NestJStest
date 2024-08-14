import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('new-route')
  getNewRoute(): string {
    return 'This is a new route!';
  }
  @Post('items')
  createItem(@Body() createItemDto: CreateItemDto): string {
    return `Item created: ${createItemDto.name} - ${createItemDto.description}`;
  }
}
