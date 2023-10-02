export class ClienteResponse {
    rut: string
    tasa: number
    constructor(rut: string, tasa: number) {
        this.rut = rut
        this.tasa = tasa
    }
}