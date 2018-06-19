import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RespostasProvider {

  constructor(public http: HttpClient) {
   
  }

  buscaResposta(dado){
    return this.http.post('http://node-helpidoso-com.umbler.net/respostas', dado)
  }

}
