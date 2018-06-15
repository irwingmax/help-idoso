import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtualizaMensagemProvider } from '../../providers/atualiza-mensagem/atualiza-mensagem';

/**
 * Generated class for the DetalhePerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-pergunta',
  templateUrl: 'detalhe-pergunta.html',
})
export class DetalhePerguntaPage {

  resposta: any;
  corpoMensagem : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private atualizaReq: AtualizaMensagemProvider) {
    this.resposta = this.navParams.get("pergunta");
    this.corpoMensagem = this.resposta.corpo_mensagem;
    console.log(this.corpoMensagem)
   
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePerguntaPage');
  }

  salvaAlteracao(msg){
    let dados = {
      id: this.resposta.id_mensagem,
      mensagem: msg
    };
    this.atualizaReq.atualizaMsg(dados).subscribe(
      (sucesso)=>{console.log(sucesso)},
      (err)=>{console.log(err)}
    )
  }

  consultaResposta(){
    console.log(this.resposta)
  }

}
