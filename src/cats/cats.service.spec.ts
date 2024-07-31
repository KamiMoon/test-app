import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { createMockRepository } from '../__mocks__/mockRepository'

describe('CatsService', () => {
  let service: CatsService;
  let mockRepository;

  beforeEach(async () => {

    mockRepository = createMockRepository()

    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService,
        {
          provide: getRepositoryToken(Cat),
          useValue: mockRepository,
        }
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create', async () => {
    const result = await service.create(new CreateCatDto());

    expect(mockRepository.create).toHaveBeenCalledTimes(1)
    expect(result).toEqual({})
  });

  it('should find', async () => {
    const result = await service.findAll();

    expect(mockRepository.find).toHaveBeenCalledTimes(1)
    expect(result).toEqual([])
  });

  it('should find one', async () => {
    const result = await service.findOne(1);

    expect(mockRepository.findOneBy).toHaveBeenCalledTimes(1)
    expect(result).toEqual({})
  });
});
