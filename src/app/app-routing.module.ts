import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'premier',
    loadChildren: () => import('./pages/premier/premier.module').then( m => m.PremierPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'profilmaison',
    loadChildren: () => import('./pages/profilmaison/profilmaison.module').then( m => m.ProfilmaisonPageModule)
  },
  {
    path: 'aggrandirmaison',
    loadChildren: () => import('./pages/aggrandirmaison/aggrandirmaison.module').then( m => m.AggrandirmaisonPageModule)
  },
  {
    path: 'interventions',
    loadChildren: () => import('./pages/interventions/interventions.module').then( m => m.InterventionsPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'mamaison',
    loadChildren: () => import('./pages/mamaison/mamaison.module').then( m => m.MamaisonPageModule)
  },
  {
    path: 'demandeintervs',
    loadChildren: () => import('./pages/demandeintervs/demandeintervs.module').then( m => m.DemandeintervsPageModule)
  },
  {
    path: 'messagerie',
    loadChildren: () => import('./pages/messagerie/messagerie.module').then( m => m.MessageriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
