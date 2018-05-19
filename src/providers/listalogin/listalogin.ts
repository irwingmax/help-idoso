import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ListaloginProvider {

  constructor(public http: HttpClient) {
    
  }

verificaLogin(login){
  return this.http.post("http://localhost:3000/login",login);
}

}
