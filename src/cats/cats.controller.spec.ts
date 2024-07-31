import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

describe('CatsController', () => {
  let controller: CatsController;

  const mockRepository = jest.fn(() => ({
    // Change here from findOne to findOneBy
    findOneBy: jest.fn(entity => entity),
  }));

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService, {
        provide: getRepositoryToken(Cat),
        useFactory: mockRepository,
      }],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
