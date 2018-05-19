import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LogarPage } from '../logar/logar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  chamaCadastro(){
    this.navCtrl.push(CadastroPage.name);
  }
  chamaLogar(){
    this.navCtrl.push(LogarPage);
  }
}
