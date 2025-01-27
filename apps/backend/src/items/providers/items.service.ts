import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../items.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
  ) {}

  public async createItem(newItem: CreateItemDto) {
    const item = this.itemsRepository.create(newItem);

    try {
      const data = await this.itemsRepository.save(item);
      console.log('data', data);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getItemsByUserId(userId: number) {
    try {
      const items = await this.itemsRepository.find({
        where: { userId },
      });
      if (items) {
        return items;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteItem(itemId: number) {
    try {
      await this.itemsRepository.delete(itemId);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
