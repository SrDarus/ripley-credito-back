import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction/entities/transaction.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sasa',
      database: 'ripley_creditos_db',
      entities: [Transaction],
      synchronize: true,
    }),
    TransactionModule,
    // IntegrationsModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
