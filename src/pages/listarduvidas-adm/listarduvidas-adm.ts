import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaenviaRespostaPage } from '../telaenvia-resposta/telaenvia-resposta';

/**
 * Generated class for the ListarduvidasAdmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listarduvidas-adm',
  templateUrl: 'listarduvidas-adm.html',
})
export class ListarduvidasAdmPage {
duvidas: any[];
admDados: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.admDados = this.navParams.get("adm")
    this.duvidas = this.navParams.get("duvidas");
    this.duvidas.map(duvida => {
      if(duvida.tipo == "T"){
        duvida.tipo = "Telefone"
      }else{
        duvida.tipo = "Computador"
      }
    })

    console.log(this.admDados)
  }

  ionViewDidLoad() {
    console.log(this.duvidas)
  }

  chamaTelaResposta(duvida){
    this.navCtrl.push(TelaenviaRespostaPage.name, {duvida: duvida, adm: this.admDados})
  }

}
