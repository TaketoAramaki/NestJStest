import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';

describe('ItemsService', () => {
  let service: ItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemsService],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an item', () => {
    const item = service.create('Test Item', 'This is a test item');
    expect(item).toEqual({
      id: 1,
      name: 'Test Item',
      description: 'This is a test item',
    });
  });

  it('should find an item', () => {
    service.create('Test Item', 'This is a test item');
    const item = service.findOne(1);
    expect(item).toEqual({
      id: 1,
      name: 'Test Item',
      description: 'This is a test item',
    });
  });

  it('should update an item', () => {
    service.create('Test Item', 'This is a test item');
    const updatedItem = service.update(
      1,
      'Updated Item',
      'This is an updated test item',
    );
    expect(updatedItem).toEqual({
      id: 1,
      name: 'Updated Item',
      description: 'This is an updated test item',
    });
  });

  it('should delete an item', () => {
    service.create('Test Item', 'This is a test item');
    service.delete(1);
    const item = service.findOne(1);
    expect(item).toBeUndefined();
  });
});
