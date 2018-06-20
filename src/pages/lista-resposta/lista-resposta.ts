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
  semResposta: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.respostas = this.navParams.get("resposta");
   console.log(this.respostas.length)
   if(this.respostas.length < 1){
     this.semResposta = true;
   }
  }

  ionViewDidLoad() {
    console.log(this.respostas);
  }

}
