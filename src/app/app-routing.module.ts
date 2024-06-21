import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tela-login',
    loadChildren: () => import('./tela-login/tela-login.module').then( m => m.TelaLoginPageModule)
  },
  {
    path: 'tela-cadastro',
    loadChildren: () => import('./tela-cadastro/tela-cadastro.module').then( m => m.TelaCadastroPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})  
export class AppRoutingModule {}
