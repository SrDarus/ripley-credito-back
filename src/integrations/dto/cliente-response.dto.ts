export class ClienteResponseDto {
    public status: number
    public valorCouta: number 
    constructor( status: number, valorCouta: number ) {
        this.status = status;
        this.valorCouta = valorCouta;
    }
}
