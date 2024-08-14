import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;
  // Item追加。idは自動で振る
  create(name: string, description: string): Item {
    const newItem = { id: this.idCounter++, name, description };
    this.items.push(newItem);
    return newItem;
  }
  // Getで全部
  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, name: string, description: string): Item {
    const item = this.findOne(id);
    if (item) {
      item.name = name;
      item.description = description;
    }
    return item;
  }

  delete(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
