import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MamaisonPage } from './mamaison.page';

const routes: Routes = [
  {
    path: '',
    component: MamaisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MamaisonPageRoutingModule {}
