import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProprietePage } from './propriete.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProprietePageRoutingModule } from './propriete-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProprietePageRoutingModule
  ],
  declarations: [ProprietePage]
})
export class ProprietePageModule {}
