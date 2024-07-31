import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {

    const mockRepository = jest.fn(() => ({
      // Change here from findOne to findOneBy
      findOneBy: jest.fn(entity => entity),
    }));

    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService,
        {
          provide: getRepositoryToken(Cat),
          useFactory: mockRepository,
        }
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
