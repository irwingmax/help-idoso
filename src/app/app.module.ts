import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { LogarPage } from '../pages/logar/logar';
import { PerguntasPage } from '../pages/perguntas/perguntas';
import { TipoAjudaPage } from '../pages/tipo-ajuda/tipo-ajuda';
import { TipoAjudaCelularPage } from '../pages/tipo-ajuda-celular/tipo-ajuda-celular';
import { TipoAjudaComputadorPage } from '../pages/tipo-ajuda-computador/tipo-ajuda-computador';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EnviocadastroProvider } from '../providers/enviocadastro/enviocadastro';
import { HttpClientModule } from "@angular/common/http";
import 'rxjs/add/operator/finally';
import { ListaloginProvider } from '../providers/listalogin/listalogin';
import { AcessoMensagemProvider } from '../providers/acesso-mensagem/acesso-mensagem';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    PerguntasPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogarPage,
    PerguntasPage,
    TipoAjudaPage,
    TipoAjudaCelularPage,
    TipoAjudaComputadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EnviocadastroProvider,
    ListaloginProvider,
    AcessoMensagemProvider
  ]
})
export class AppModule {}
