import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnviaRespostaProvider } from '../../providers/envia-resposta/envia-resposta';
import { PerguntasPage } from '../perguntas/perguntas';

/**
 * Generated class for the TelaenviaRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-telaenvia-resposta',
  templateUrl: 'telaenvia-resposta.html',
})
export class TelaenviaRespostaPage {
  admDados:any;
  duvida: any;
  dadosGato; any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private providerEnviar: EnviaRespostaProvider) {

    this.admDados = this.navParams.get("adm");
    this.duvida = this.navParams.get("duvida");
    this.dadosGato = {
      dados:[
          {
              id_admin:this.admDados[0].id_admin,
              nome: this.admDados[0].nome ,
              email:this.admDados[0].email,
              senha:this.admDados[0].senha
          }
      ],
      adm: true
    }
    
    
  }

  ionViewDidLoad() {
    console.log(this.admDados,this.duvida);
  }

  enviarResposta(texto){

    let dadosEnvio = {
      id_mensagem: this.duvida.id_mensagem ,
      id_admin: this.admDados[0].id_admin,
      resposta: texto
    }
    this.providerEnviar.enviar(dadosEnvio).subscribe(
      (dados) => {console.log(dados);
                  this.navCtrl.setRoot(PerguntasPage, {dados: this.dadosGato})
                },
      (err) => {console.log(err)}
    )
  }
}
