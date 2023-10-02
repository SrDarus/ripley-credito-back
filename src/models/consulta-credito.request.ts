export class ConsultaCreditoRequest {
    RutCliente: number
    MontoDelCredito: number
    NumeroCuotas: number
    constructor(rutCliente: number,
        montoDelCredito: number,
        numeroCuotas: number) {
        this.RutCliente = rutCliente
        this.MontoDelCredito = montoDelCredito
        this.NumeroCuotas = numeroCuotas
    }
}