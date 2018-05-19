import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoAjudaPage } from '../tipo-ajuda/tipo-ajuda';

/**
 * Generated class for the PerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  dados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = navParams.get("dados");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
    console.log(this.dados)
  }

  tipoAjudaCall() {
    this.navCtrl.push(TipoAjudaPage);
   }

}
