import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  dados: any = "erro";
  vlogin: boolean = false;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private lg: ListaloginProvider, private loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogarPage');
  }

  chamaLogin(login, senha){

    let load = this.loadCtrl.create({
      content: 'Verificando informações'
    })

    load.present();
      let prepEnvio: Login = {
        login: login,
        senha: senha
      }

    this.lg.verificaLogin(prepEnvio).
    subscribe(
      (dad) =>{
         this.dados = dad
         
        
       
         if(dad[0] != null){
           load.dismiss();
             this.navCtrl.setRoot(PerguntasPage, {dados: this.dados} );
             console.log(dad)
         }else{
           this.vlogin = true;
         }
      },
      
      (err) => console.log(err)
      
    )

    // setTimeout( () => {
      // if(this.dados[0].email.length > 1){
      //   this.navCtrl.setRoot(PerguntasPage, {dados: this.dados});
      // }else{
      //   this.vlogin = true;
      // }
    // }, 3000);
    
    

  
  }
}

