import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) { }

  create(createCatDto: CreateCatDto) {
    return this.catsRepository.create(createCatDto);
  }

  findAll(): Promise<CreateCatDto[]> {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOneBy({ id });
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catsRepository.save(updateCatDto);
  }

  remove(id: number) {
    return this.catsRepository.delete(id);
  }
}
