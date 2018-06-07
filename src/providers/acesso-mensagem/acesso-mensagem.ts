import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AcessoMensagemProvider {

  constructor(public http: HttpClient) {
    
  }

  enviaMensagem(dado){
    return this.http.post('http://node-helpidoso-com.umbler.net/mensagem', dado);
  }

  

} 
