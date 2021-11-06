import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RewardPage } from './reward';
import { RewardPageRoutingModule } from './reward-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardPageRoutingModule
  ],
  declarations: [RewardPage],
  entryComponents: [],
  bootstrap: [RewardPage],
})
export class RewardModule {}
