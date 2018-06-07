import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoPerguntasPage } from './historico-perguntas';

@NgModule({
  declarations: [
    HistoricoPerguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoPerguntasPage),
  ],
})
export class HistoricoPerguntasPageModule {}
