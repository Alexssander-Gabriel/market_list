import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produto-list',
    loadChildren: () => import('./Produto/produto-list/produto-list.module').then( m => m.ProdutoListPageModule)
  },
  {
    path: 'produto-register',
    loadChildren: () => import('./Produto/produto-register/produto-register.module').then( m => m.ProdutoRegisterPageModule)
  },
  {
    path: 'lista-list',
    loadChildren: () => import('./Lista/lista-list/lista-list.module').then( m => m.ListaListPageModule)
  },
  {
    path: 'lista-register',
    loadChildren: () => import('./Lista/lista-register/lista-register.module').then( m => m.ListaRegisterPageModule)
  },
  {
    path: 'lista-item',
    loadChildren: () => import('./Lista/lista-item/lista-item.module').then( m => m.ListaItemPageModule)
  },
  {
    path: 'mercado-list',
    loadChildren: () => import('./Mercado/mercado-list/mercado-list.module').then( m => m.MercadoListPageModule)
  },
  {
    path: 'mercado-register',
    loadChildren: () => import('./Mercado/mercado-register/mercado-register.module').then( m => m.MercadoRegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
