import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePerguntaPage } from './detalhe-pergunta';

@NgModule({
  declarations: [
    DetalhePerguntaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePerguntaPage),
  ],
})
export class DetalhePerguntaPageModule {}
