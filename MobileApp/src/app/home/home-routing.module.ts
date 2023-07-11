import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'cava',
    loadChildren: () => import('./home/cava/cava.module').then( m => m.CavaPageModule)
  },
  {
    path: 'frisdrank',
    loadChildren: () => import('./home/frisdrank/frisdrank.module').then( m => m.FrisdrankPageModule)
  },
  {
    path: 'fruitsap',
    loadChildren: () => import('./home/fruitsap/fruitsap.module').then( m => m.FruitsapPageModule)
  },
  {
    path: 'water',
    loadChildren: () => import('./home/water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'wijn',
    loadChildren: () => import('./home/wijn/wijn.module').then( m => m.WijnPageModule)
  },
  {
    path: 'bier',
    loadChildren: () => import('./home/bier/bier.module').then( m => m.BierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
