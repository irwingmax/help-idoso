import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TipoAjudaPage } from '../tipo-ajuda/tipo-ajuda';
//import { HistoricoPerguntasPage } from '../historico-perguntas/historico-perguntas';
import { ConsultaHistoricoProvider } from '../../providers/consulta-historico/consulta-historico';
import { HistoricoPerguntasPage } from '../historico-perguntas/historico-perguntas';



@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  dados: any;
  nome: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public con: ConsultaHistoricoProvider, private load: LoadingController) {
    this.dados = navParams.get("dados");
    let arrayNome: string[];
    arrayNome = this.dados[0].nome.split(" ");
    this.nome = arrayNome[0];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
    
    
  }

  tipoAjudaCall() {
    this.navCtrl.push(TipoAjudaPage, {dados: this.dados});
   }

  historicoCall(){
    
    let loading = this.load.create({
      content: "Buscando Historico!"
    });
    loading.present();
    let cliente = this.dados;
    console.log(cliente)
  
    this.con.consulta(cliente).subscribe(
      (lista) => {
        loading.dismiss();
        this.navCtrl.push(HistoricoPerguntasPage.name, {perguntas: lista})
      },
      (err) => console.log(err)

    )
    
   
    
  }

}
