import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnviaRespostaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnviaRespostaProvider {

  constructor(public http: HttpClient) {
    
  }

  enviar(dados){
    return this.http.post('http://node-helpidoso-com.umbler.net/enviaresposta', dados)
  }
}
