import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoAjudaPage } from '../tipo-ajuda/tipo-ajuda';
//import { HistoricoPerguntasPage } from '../historico-perguntas/historico-perguntas';
import { ConsultaHistoricoProvider } from '../../providers/consulta-historico/consulta-historico';



@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  dados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public con: ConsultaHistoricoProvider) {
    this.dados = navParams.get("dados");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
    console.log(this.dados);
    
  }
  
  tipoAjudaCall() {
    this.navCtrl.push(TipoAjudaPage, {dados: this.dados});
   }

  historicoCall(){
    let cliente = this.dados;
    console.log(cliente)
    
   // let todasMensagens: any;
    this.con.consulta(cliente).subscribe(
      (lista) => console.log(lista),
      (err) => console.log(err)

    )
    
   // this.navCtrl.push(HistoricoPerguntasPage.name, {listaMensagens: todasMensagens} )
    
  }

}
