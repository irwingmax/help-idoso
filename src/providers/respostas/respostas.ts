import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RespostasProvider {

  constructor(public http: HttpClient) {
   
  }

  buscaResposta(dado){
    return this.http.post('http://localhost:3000/respostas', dado)
  }

}
