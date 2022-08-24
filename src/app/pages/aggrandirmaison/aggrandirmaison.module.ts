import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggrandirmaisonPageRoutingModule } from './aggrandirmaison-routing.module';

import { AggrandirmaisonPage } from './aggrandirmaison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggrandirmaisonPageRoutingModule
  ],
  declarations: [AggrandirmaisonPage]
})
export class AggrandirmaisonPageModule {}
