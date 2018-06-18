import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
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
import { ConsultaHistoricoProvider } from '../providers/consulta-historico/consulta-historico';
import { AtualizaMensagemProvider } from '../providers/atualiza-mensagem/atualiza-mensagem';
import { RespostasProvider } from '../providers/respostas/respostas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    AcessoMensagemProvider,
    ConsultaHistoricoProvider,
    AtualizaMensagemProvider,
    RespostasProvider
  ]
})
export class AppModule {}
