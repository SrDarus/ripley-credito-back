export class CreateTransactionDto {
    
    fecha: Date
    json: string

    constructor(fecha:Date, json: string) {
        this.fecha = fecha
        this.json = json
    }
}
