import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeintervsPageRoutingModule } from './demandeintervs-routing.module';

import { DemandeintervsPage } from './demandeintervs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeintervsPageRoutingModule
  ],
  declarations: [DemandeintervsPage]
})
export class DemandeintervsPageModule {}
