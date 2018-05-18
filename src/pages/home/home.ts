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

  loginCall() {
    this.navCtrl.push(LogarPage);
  }
  cadastroCall() {
    this.navCtrl.push(CadastroPage);
  }

}
