import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraPerguntaPage } from './cadastra-pergunta';

@NgModule({
  declarations: [
    CadastraPerguntaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraPerguntaPage),
  ],
})
export class CadastraPerguntaPageModule {}
