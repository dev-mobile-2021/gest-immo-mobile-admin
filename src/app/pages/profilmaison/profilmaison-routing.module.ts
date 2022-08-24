import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilmaisonPage } from './profilmaison.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilmaisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilmaisonPageRoutingModule {}
