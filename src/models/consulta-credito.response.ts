export class ConsultaCreditoResponse {
    status :number
    valorCuota : number
    constructor(status :number,
        valorCuota : number) {
        this.status = status
        this.valorCuota = valorCuota
    }
}