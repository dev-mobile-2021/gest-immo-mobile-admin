import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggrandirmaisonPage } from './aggrandirmaison.page';

const routes: Routes = [
  {
    path: '',
    component: AggrandirmaisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggrandirmaisonPageRoutingModule {}
