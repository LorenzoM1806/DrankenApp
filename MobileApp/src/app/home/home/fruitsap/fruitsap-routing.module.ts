import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitsapPage } from './fruitsap.page';

const routes: Routes = [
  {
    path: '',
    component: FruitsapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsapPageRoutingModule {}
