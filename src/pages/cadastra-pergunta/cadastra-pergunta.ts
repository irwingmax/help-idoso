import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcessoMensagemProvider } from '../../providers/acesso-mensagem/acesso-mensagem';
import { PerguntasPage } from '../perguntas/perguntas';

/**
 * Generated class for the CadastraPerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-pergunta',
  templateUrl: 'cadastra-pergunta.html',
})
export class CadastraPerguntaPage {
  tipo: any;
  dados: any;
  mensagem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private msg: AcessoMensagemProvider) {

    this.dados = navParams.get("dados");
    this.tipo = navParams.get("tipo");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPerguntaPage');
    console.log(this.tipo,this.dados);
  }

  enviaMensagem(mensagemView){
    let primeiraLetra: string = this.tipo;
    
    //console.log(mensagemView);
    let values = {
      id: this.dados[0].id_cliente,
      mensagem: mensagemView,
      tipo: primeiraLetra.substr(0,1)
    }
    this.msg.enviaMensagem(values).
    subscribe(
      (dad) => {
        console.log(dad),
        this.navCtrl.setRoot(PerguntasPage, {dados: this.dados})
      },
      (err) => console.log(err)
    )
  }

}
