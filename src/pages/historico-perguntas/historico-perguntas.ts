import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhePerguntaPage } from '../detalhe-pergunta/detalhe-pergunta';

/**
 * Generated class for the HistoricoPerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico-perguntas',
  templateUrl: 'historico-perguntas.html',
})
export class HistoricoPerguntasPage {

   perguntas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.perguntas = this.navParams.get("perguntas");
      this.perguntas.map( elemento =>{
        if(elemento.tipo == "T")
          elemento.tipo = "Celular";
        else
        elemento.tipo = "Computador";
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPerguntasPage');
    console.log(this.perguntas);
  }

  detalharPergunta(pergunta){

    this.navCtrl.push(DetalhePerguntaPage.name, {pergunta:pergunta})
    
  }

}
