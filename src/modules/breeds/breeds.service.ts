import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dtos/create-breed.dto';
import { UpdateBreedDto } from './dtos/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private dogBreedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.dogBreedRepository.find();
  }

  findById(id: string): Promise<DogBreed> {
    return this.dogBreedRepository.findOne(id);
  }

  create({ name: Name, picture: Picture }: CreateBreedDto): void {
    this.dogBreedRepository.insert({ Name, Picture });
  }

  update(id: string, { name: Name, picture: Picture }: UpdateBreedDto) {
    this.dogBreedRepository.update(id, { Name, Picture });
  }

  delete(id: string) {
    this.dogBreedRepository.delete(id);
  }
}
