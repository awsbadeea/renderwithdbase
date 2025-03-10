import { Injectable } from '@nestjs/common';
import { CreateAwDto } from './dto/create-aw.dto';
import { UpdateAwDto } from './dto/update-aw.dto';
import { Aw } from './entities/aw.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AwsService {
  constructor(@InjectRepository(Aw) private awRepository:Repository<Aw>){}

async  create(createAwDto: CreateAwDto) {
  const aw=await this.awRepository.create(createAwDto);
  return this.awRepository.save(aw); 
  }


  findAll() {
    return this.awRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} aw`;
  }

  update(id: number, updateAwDto: UpdateAwDto) {
    return `This action updates a #${id} aw`;
  }

  remove(id: number) {
    return `This action removes a #${id} aw`;
  }
}
