import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeintervsPage } from './demandeintervs.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeintervsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeintervsPageRoutingModule {}
