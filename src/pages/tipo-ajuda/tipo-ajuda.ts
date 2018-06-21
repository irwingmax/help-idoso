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
nome: string;
foto: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = navParams.get("dados");

    let arrayNome: string[] = this.dados[0].nome.split(" ");
    this.nome = arrayNome[0];

    if (this.dados[0].sexo == "m") {
      this.foto = "./assets/imgs/icone_masculino.png"
    }else{
      this.foto ="./assets/imgs/icone_feminino.png"
    }
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoAjudaPage');
    console.log(this.dados)

  }
  cadastraCelular(){
    let tipo = "Telefone";
    this.navCtrl.push(CadastraPerguntaPage.name,{dados: this.dados,tipo: tipo});
  }
  cadastraComputador(){
    let tipo = "Computador";
    this.navCtrl.push(CadastraPerguntaPage.name,{dados: this.dados,tipo: tipo});
  }
}
