import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class EnviocadastroProvider {

  constructor(public http: HttpClient) {
    
    
  }

  cadastro_node(dados){
    
   return this.http.post("http://node-helpidoso-com.umbler.net/cadastro",dados);
  }

}
