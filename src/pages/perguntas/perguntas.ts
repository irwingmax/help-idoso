import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TipoAjudaPage } from '../tipo-ajuda/tipo-ajuda';
//import { HistoricoPerguntasPage } from '../historico-perguntas/historico-perguntas';
import { ConsultaHistoricoProvider } from '../../providers/consulta-historico/consulta-historico';
import { HistoricoPerguntasPage } from '../historico-perguntas/historico-perguntas';
import { ListarduvidasAdmPage } from '../listarduvidas-adm/listarduvidas-adm';
import { ListaduvidasAdmProvider } from '../../providers/listaduvidas-adm/listaduvidas-adm';



@IonicPage()
@Component({
  selector: 'page-perguntas',
  templateUrl: 'perguntas.html',
})
export class PerguntasPage {
  dados: any;
  nome: string;
  adm: boolean = false;
  user: boolean = false;
  foto: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public con: ConsultaHistoricoProvider, private load: LoadingController, private listaDuvidasP: ListaduvidasAdmProvider) {
    this.dados = navParams.get("dados");
    
    
    let arrayNome: string[] = this.dados.dados[0].nome.split(" ");
    this.nome = arrayNome[0];

    if(this.dados.adm){
      this.adm = true;
    }
    if(!this.dados.adm){
      this.user = true
    }
    
    if (this.dados.dados[0].sexo == "m") {
      console.log("homem")
      this.foto = "../assets/imgs/icone_masculino.png"
    }else{
      console.log("mulher")
      this.foto ="../assets/imgs/icone_feminino.png"
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasPage');
    console.log(this.dados)
    
    
  }

  tipoAjudaCall() {
    this.navCtrl.push(TipoAjudaPage, {dados: this.dados.dados});
   }

  historicoCall(){
    
    let loading = this.load.create({
      content: "Buscando Historico!"
    });
    loading.present();
    let cliente = this.dados.dados;
    console.log(cliente)
  
    this.con.consulta(cliente).subscribe(
      (lista) => {
        loading.dismiss();
        this.navCtrl.push(HistoricoPerguntasPage.name, {perguntas: lista})
      },
      (err) => console.log(err)

    )

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  responderDuvidas(){

    this.listaDuvidasP.listar().subscribe(
      (dados) => {this.navCtrl.push(ListarduvidasAdmPage.name, {duvidas: dados, adm: this.dados.dados})},
      (err) => {console.log(err)}
    )
    
  }

}
