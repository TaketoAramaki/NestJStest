/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() body: { name: string; description: string }): Item {
    return this.itemsService.create(body.name, body.description);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; description: string }): Item {
    return this.itemsService.update(Number(id), body.name, body.description);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(Number(id));
  }
}
