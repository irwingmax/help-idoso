import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConsultaHistoricoProvider {

  constructor(public http: HttpClient) {
   
  }

  consulta(dado){
    return this.http.post('http://localhost:3000/historico', dado);
  }

}
