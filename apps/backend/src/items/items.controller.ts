import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateItemDto } from './items.dtos';
import { ItemsService } from './providers/items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/:userId')
  public async getItemsByUserId(@Param('userId') userId: number) {
    return this.itemsService.getItemsByUserId(userId);
  }

  @Post()
  public async createItem(@Body() newItem: CreateItemDto) {
    return this.itemsService.createItem(newItem);
  }

  @Patch()
  public async updateItem(@Body() item: CreateItemDto) {
    return this.itemsService.updateItem(item);
  }

  @Delete()
  public async deleteItem(@Query('id') itemId: string) {
    return this.itemsService.deleteItem(itemId);
  }
}
