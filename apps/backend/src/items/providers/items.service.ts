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
      return await this.itemsRepository.save(item);
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

  public async updateItem(item: CreateItemDto) {
    try {
      const existingItem = await this.itemsRepository.findOneBy({
        id: item.id,
      });
      if (existingItem) {
        existingItem.id = item.id;
        existingItem.userId = item.userId;
        existingItem.name = item.name;
        existingItem.description = item.description;
        existingItem.isAvailable = item.isAvailable;
        existingItem.imageUrl = item.imageUrl;
        existingItem.locationId = item.locationId;

        return this.itemsRepository.save(existingItem);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteItem(itemId: string) {
    try {
      await this.itemsRepository.delete(itemId);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
