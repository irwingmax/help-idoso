import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AlteracaoDadosProvider } from '../../providers/alteracao-dados/alteracao-dados';

/**
 * Generated class for the AlterarDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-dados',
  templateUrl: 'alterar-dados.html',
})
export class AlterarDadosPage {
  
  nome: string;
  sexo: string;
  nascimento: string = new Date().toISOString().substr(0,10);
  senha: string;
  email: string;
  arrayErros: string[] = [""];
  alerta: Alert;
  liberaEnvio: boolean; false;
  formulario: FormGroup;
  dados;

  constructor(public navCtrl: NavController, public navParams: NavParams ,fb: FormBuilder, private alterarProv: AlteracaoDadosProvider,private alertaCon: AlertController) {
    this.formulario = fb.group({
      nome: ['',Validators.required],
      sexo: ['', Validators.required],
      nascimento: [],
      senha: ["",Validators.required],
      email: ["",Validators.compose([Validators.email,Validators.required])]
    })

    this.dados = this.navParams.get("dados");
    this.nome = this.dados.dados[0].nome;
    this.nascimento = this.dados.dados[0].nascimento;
    this.email = this.dados.dados[0].email;
    this.sexo = this.dados.dados[0].sexo;
    this.senha = this.dados.dados[0].senha;
    
  }
    


  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarDadosPage');
    console.log(this.dados)
  }

  enviaCadastro(){
    let alertamsg = "";
    this.alerta = this.alertaCon.create({
      title: "Aviso",
      subTitle: "Erro ao Atualizar, contate o Administrador!",
      buttons: [{
        text: "Ok",
        handler: () => {this.navCtrl.setRoot(HomePage)}
      }]
    });
    
    //cria um modelo dos dados a serem enviados
    let dados = {
      nome: this.nome,
      email: this.email,
      sexo: this.sexo,
      nascimento: this.nascimento,
      senha: this.senha,
      id: this.dados.dados[0].id_cliente
    }
    //reseta o array para receber os erros
    this.arrayErros.length = 0;
    if (this.formulario.invalid){
      if(this.formulario.controls.nome.invalid ){
        this.arrayErros.push("Campo Nome Invalido")
      }
      if(this.formulario.controls.email.invalid ){
        this.arrayErros.push("campo Email Invalido")
      }
      if(this.formulario.controls.sexo.invalid ){
        this.arrayErros.push("Campo Sexo invalido")
      }
      if(this.formulario.controls.senha.invalid ){
        this.arrayErros.push("Campo Sexo invalido")
      }
    this.liberaEnvio = false;
    }else{this.liberaEnvio = true}
      
      
    if(this.liberaEnvio){

      this.alterarProv.enviaAlteracao(dados).
        finally(
          () => {
            this.alerta.setSubTitle(alertamsg);
            this.alerta.present();
          }
        ).
        subscribe(
          //callback sucesso
          () => alertamsg = "Alteração realizada, favor entrar novamente!",
          //callback falha
          () => alertamsg = "Não foi possível alterar, tente novamente mais tarde"
          
          
        );
    }
  }

}

