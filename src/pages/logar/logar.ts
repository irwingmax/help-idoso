import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaloginProvider } from '../../providers/listalogin/listalogin';
import { Login } from '../../model/modeloLogin';
import { PerguntasPage } from '../perguntas/perguntas';



/**
 * Generated class for the LogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logar',
  templateUrl: 'logar.html',
})
export class LogarPage {
  dados: object;
  vlogin: boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private lg: ListaloginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogarPage');
  }

  chamaLogin(login, senha){
      let prepEnvio: Login = {
        login: login,
        senha: senha
      }

    this.lg.verificaLogin(prepEnvio).
    subscribe(
      (dad) => this.dados = dad,
      (err) => console.log(err)
    )

    setTimeout( () => {
      if(this.dados[0].email.length > 1){
        this.navCtrl.setRoot(PerguntasPage, {dados: this.dados});
      }else{
        this.vlogin = true;
      }
    }, 1000);
    
    

  
  }
}

