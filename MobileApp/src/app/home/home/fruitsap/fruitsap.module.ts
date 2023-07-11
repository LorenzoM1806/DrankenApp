import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsapPageRoutingModule } from './fruitsap-routing.module';

import { FruitsapPage } from './fruitsap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsapPageRoutingModule
  ],
  declarations: [FruitsapPage]
})
export class FruitsapPageModule {}
