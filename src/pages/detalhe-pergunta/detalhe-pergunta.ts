import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AtualizaMensagemProvider } from '../../providers/atualiza-mensagem/atualiza-mensagem';
import { ListaRespostaPage } from '../lista-resposta/lista-resposta';
import { RespostasProvider } from '../../providers/respostas/respostas';
import { FinalizaPerguntaProvider } from '../../providers/finaliza-pergunta/finaliza-pergunta';
import { PerguntasPage } from '../perguntas/perguntas';


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
  dados;

  constructor(public navCtrl: NavController, public navParams: NavParams,private atualizaReq: AtualizaMensagemProvider, private buscaRespostaProvider:RespostasProvider,
             private providerFinalizaP: FinalizaPerguntaProvider, private alert: AlertController) {
    this.resposta = this.navParams.get("pergunta");
    this.corpoMensagem = this.resposta.corpo_mensagem;
    console.log(this.corpoMensagem);

   
    this.dados = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePerguntaPage');
    console.log(this.resposta)
  }

  salvaAlteracao(msg){
    let dados = {
      id: this.resposta.id_mensagem,
      mensagem: msg
    };
    this.atualizaReq.atualizaMsg(dados).subscribe(
      (sucesso)=>{console.log(sucesso)
      
      },
      (err)=>{console.log(err)}
    )
  }

  consultaResposta(){
   let id_mensagem = this.resposta
    this.buscaRespostaProvider.buscaResposta(id_mensagem).subscribe(
      (dados) => {this.navCtrl.push(ListaRespostaPage.name, {resposta: dados})},
      (err) => {console.log(err)}
    )
    
  }

  finalizaPergunta(){
   let alerta = this.alert.create({
      title: "Confirmar Encerramento?",
      message: "Confirmando isso sua pergunta não aparecerá em nossos sistemas!",
      buttons:[
        {
          text: "Confirmar",
          handler: () =>{
            let dados ={
              id_mensagem: this.resposta.id_mensagem
            };
            console.log(dados)
            this.providerFinalizaP.finaliza(dados).
              subscribe(
                (dados) => {dados},
                (err) => {err}
              );
              this.navCtrl.setRoot(PerguntasPage, {dados: this.dados})
          }
        },
        {
          text: "Voltar",
          handler: () => {
            console.log("voltou")
          }
        }
      ]
    })
    alerta.present();
  }

}
