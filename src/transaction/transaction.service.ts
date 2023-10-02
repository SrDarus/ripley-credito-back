import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { IntegrationsService } from 'src/integrations/integrations.service';

@Injectable()
export class TransactionService {


  constructor(
    @InjectRepository(Transaction) private readonly transactionsRepository: Repository<Transaction>
  ) {
  }

  async create(transDto: CreateTransactionDto) {
    const tran = this.transactionsRepository.create(transDto)

    
    // let usuarioIntegracion = this.integracionesService.getCliente(transDto.)

    return await this.transactionsRepository.save(tran)
  }

  findAll() {
    return `This action returns all transaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
