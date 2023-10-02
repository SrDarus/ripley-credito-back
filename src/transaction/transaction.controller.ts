import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { IntegrationsService } from '../integrations/integrations.service';
import { catchError } from 'rxjs';
import { ConsultaCreditoRequest } from 'src/models/consulta-credito.request';
import { ConsultaCreditoResponse } from 'src/models/consulta-credito.response';

@ApiTags('transantion')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService,
    private readonly integrationsService: IntegrationsService) { }

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto)
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }

  @Post('consultaCredito')
  consultaCredito(@Body() consultaCredito: ConsultaCreditoRequest): ConsultaCreditoResponse {
    console.log("TransactionController consultaCredito")
    let cliente = ""
    let tasa = 0
    this.integrationsService.getCliente(+consultaCredito.RutCliente).subscribe(
      {
        next: (c) => {
          
          this.integrationsService.getTasa(+consultaCredito.RutCliente).subscribe({
            next: (t) => {
              tasa = t.data
              let valorCouta = (consultaCredito.MontoDelCredito / consultaCredito.NumeroCuotas) * Number(tasa)
              console.log("valorCouta",valorCouta)
              return new ConsultaCreditoResponse(HttpStatus.OK, valorCouta)
            }

          })
        },
        error: (e) => console.error("**error**", e),
        complete: () => console.info('complete')
      }
    )
    tasa = 3
    let valorCouta = (consultaCredito.MontoDelCredito / consultaCredito.NumeroCuotas) * Number(tasa)

    let createTransactionDto = new CreateTransactionDto(new Date(), JSON.stringify(consultaCredito))
    this.transactionService.create(createTransactionDto)
    return new ConsultaCreditoResponse(HttpStatus.OK, valorCouta)

  }

}
