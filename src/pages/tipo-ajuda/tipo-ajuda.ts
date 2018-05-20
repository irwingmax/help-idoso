import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastraPerguntaPage } from '../cadastra-pergunta/cadastra-pergunta';

/**
 * Generated class for the TipoAjudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipo-ajuda',
  templateUrl: 'tipo-ajuda.html',
})
export class TipoAjudaPage {
dados: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = navParams.get("dados");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoAjudaPage');

  }
  cadastraCelular(){
    let tipo = "Celular";
    this.navCtrl.push(CadastraPerguntaPage.name,{dados: this.dados,tipo: tipo});
  }
  cadastraComputador(){
    let tipo = "Computador";
    this.navCtrl.push(CadastraPerguntaPage.name,{dados: this.dados,tipo: tipo});
  }
}
