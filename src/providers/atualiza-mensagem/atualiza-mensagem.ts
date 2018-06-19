import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AtualizaMensagemProvider {

  constructor(public http: HttpClient) {
    
  }

  atualizaMsg(dados){
   return this.http.post("http://node-helpidoso-com.umbler.net/atualizaMensagem", dados);
  }

}
