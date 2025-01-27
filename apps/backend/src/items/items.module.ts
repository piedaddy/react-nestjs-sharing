import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './providers/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
  imports: [TypeOrmModule.forFeature([Item])],
  exports: [],
})
export class ItemsModule {}
