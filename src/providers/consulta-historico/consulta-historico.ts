import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConsultaHistoricoProvider {

  constructor(public http: HttpClient) {
   
  }

  consulta(dado){
    return this.http.post("http://node-helpidoso-com.umbler.net/historico", dado);
  }

}
