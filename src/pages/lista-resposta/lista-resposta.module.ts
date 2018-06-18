import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRespostaPage } from './lista-resposta';

@NgModule({
  declarations: [
    ListaRespostaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRespostaPage),
  ],
})
export class ListaRespostaPageModule {}
