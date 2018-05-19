import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
<<<<<<< HEAD
=======
import { LogarPage } from '../logar/logar';
>>>>>>> c4e52a92ce802547b60c7a5f0bf25ba379bdcfe9

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

<<<<<<< HEAD

  chamaCadastro(){
    this.navCtrl.push(CadastroPage.name)
  }
=======
  loginCall() {
    this.navCtrl.push(LogarPage);
  }
  cadastroCall() {
    this.navCtrl.push(CadastroPage);
  }

>>>>>>> c4e52a92ce802547b60c7a5f0bf25ba379bdcfe9
}
