import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { LogarPage } from '../pages/logar/logar';
import { PerguntasPage } from '../pages/perguntas/perguntas';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TipoAjudaPage } from '../pages/tipo-ajuda/tipo-ajuda';
import { TipoAjudaCelularPage } from '../pages/tipo-ajuda-celular/tipo-ajuda-celular';
import { TipoAjudaComputadorPage } from '../pages/tipo-ajuda-computador/tipo-ajuda-computador';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EnviocadastroProvider } from '../providers/enviocadastro/enviocadastro';
import { HttpClientModule } from "@angular/common/http";
import 'rxjs/add/operator/finally';
import { ListaloginProvider } from '../providers/listalogin/listalogin';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    PerguntasPage,
    CadastroPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    IonicModule.forRoot(MyApp),
    HttpClientModule
=======
    IonicModule.forRoot(MyApp)

>>>>>>> c4e52a92ce802547b60c7a5f0bf25ba379bdcfe9
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    PerguntasPage,
    CadastroPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EnviocadastroProvider,
    ListaloginProvider
  ]
})
export class AppModule {}
