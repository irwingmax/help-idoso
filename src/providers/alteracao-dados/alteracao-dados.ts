import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlteracaoDadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlteracaoDadosProvider {

  constructor(public http: HttpClient) {
    
  }
  enviaAlteracao(dados){
    return this.http.post("http://node-helpidoso-com.umbler.net/alterardados", dados)
  }
}
