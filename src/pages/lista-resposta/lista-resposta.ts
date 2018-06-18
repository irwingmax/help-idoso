import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-resposta',
  templateUrl: 'lista-resposta.html',
})
export class ListaRespostaPage {

  respostas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.respostas =  this.navParams.get("resposta");
  }

  ionViewDidLoad() {
    console.log(this.respostas);
  }

}
