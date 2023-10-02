import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'TRX_LOG'})
export class Transaction {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'id_trx'
    })
    id: number;

    @Column({
        name: 'fecha_trx'
    })
    fecha: Date;

    @Column({
        name: 'json_trx'
    })
    json : string;
}

