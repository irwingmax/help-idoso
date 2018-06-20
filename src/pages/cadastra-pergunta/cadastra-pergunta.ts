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
  gato: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private msg: AcessoMensagemProvider) {

    this.dados = navParams.get("dados");
    this.tipo = navParams.get("tipo");
    this.gato = {
        dados: [{ 
          id_cliente: this.dados[0].id_cliente,
          nome: this.dados[0].nome,
          email: this.dados[0].email,
          nascimento: this.dados[0].nascimento,
          senha: this.dados[0].senha,
          sexo: this.dados[0].sexo,
        }]
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPerguntaPage');
    console.log(this.dados)
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
        this.navCtrl.setRoot(PerguntasPage, {dados: this.gato},
            )
      },
      (err) => console.log(err)
    )
  }

}
