import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MamaisonPageRoutingModule } from './mamaison-routing.module';

import { MamaisonPage } from './mamaison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MamaisonPageRoutingModule
  ],
  declarations: [MamaisonPage]
})
export class MamaisonPageModule {}
