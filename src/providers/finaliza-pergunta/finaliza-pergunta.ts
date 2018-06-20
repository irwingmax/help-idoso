import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class FinalizaPerguntaProvider {

  constructor(public http: HttpClient) {

  }

  finaliza(dado){
    return this.http.post("http://node-helpidoso-com.umbler.net/encerrapergunta", dado)
  }
}
