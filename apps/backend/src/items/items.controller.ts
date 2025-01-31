import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateItemDto, UpdateItemDto } from './items.dtos';
import { ItemsService } from './providers/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/:userId')
  public async getItemsByUserId(@Param('userId') userId: number) {
    return this.itemsService.getItemsByUserId(userId);
  }

  @Get()
  public async getItems(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    console.log('limit', limit);
    return this.itemsService.getItems(limit, page);
  }

  @Post()
  public async createItem(@Body() newItem: CreateItemDto) {
    return this.itemsService.createItem(newItem);
  }

  @Patch()
  public async updateItem(@Body() item: UpdateItemDto) {
    return this.itemsService.updateItem(item);
  }

  @Delete()
  public async deleteItem(@Query('id') itemId: string) {
    return this.itemsService.deleteItem(itemId);
  }
}
