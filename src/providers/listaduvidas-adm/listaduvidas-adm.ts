import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaduvidasAdmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaduvidasAdmProvider {

  constructor(public http: HttpClient) {
    
  }

  listar(){
    return this.http.get("http://node-helpidoso-com.umbler.net/listarduvidas-adm")
  }

}
