import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilmaisonPageRoutingModule } from './profilmaison-routing.module';

import { ProfilmaisonPage } from './profilmaison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilmaisonPageRoutingModule
  ],
  declarations: [ProfilmaisonPage]
})
export class ProfilmaisonPageModule {}
