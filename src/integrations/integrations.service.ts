import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable } from 'rxjs';

@Injectable()
export class IntegrationsService {

  private readonly httpService: HttpService
  constructor(httpService: HttpService) {
    this.httpService = httpService
  }

  getCliente(rut: number): Observable<any> {

    return this.httpService.get(`https://8a8axu9k40.execute-api.us-east-1.amazonaws.com/desa/getcliente/${rut}`)
      .pipe(
        catchError(e => {
          throw new HttpException(e.response, e.response);
        }),
      );


  }

  getTasa(rut: number): Observable<any> {
    return this.httpService.get(`https://8a8axu9k40.execute-api.us-east-1.amazonaws.com/desa/gettasa/${rut}`);
  }

}