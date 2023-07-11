import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WijnPage } from './wijn.page';

const routes: Routes = [
  {
    path: '',
    component: WijnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WijnPageRoutingModule {}
