import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { modeloCadastro } from '../../model/modeloCadastro';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome: string;
  sexo: string;
  nascimento: string = new Date().toISOString().substr(0,10);
  senha: string;
  email: string;
  arrayErros: string[] = [""];
  

  formulario: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder) {
    //validacao dos formulários
    this.formulario = fb.group({
      nome: ['',Validators.required],
      sexo: ['', Validators.required],
      nascimento: [],
      senha: ["",Validators.required],
      email: ["",Validators.compose([Validators.email,Validators.required])],
      confirmPass: []
    })
    
  }

  ionViewDidLoad() {
   
  }

  enviaCadastro(){
    
    //cria um modelo dos dados a serem enviados
    let dados: modeloCadastro = {
      nome: this.nome,
      email: this.email,
      sexo: this.sexo,
      nascimento: this.nascimento,
      senha: this.senha
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
    
    }
    console.log(dados);
  }
}
