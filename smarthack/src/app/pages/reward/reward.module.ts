import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RewardPage } from './reward';
import { RewardPageRoutingModule } from './reward-routing.module';
import { RewardSlider } from '../reward-slider/reward-slider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardPageRoutingModule
  ],
  declarations: [RewardPage, RewardSlider],
  entryComponents: [RewardSlider],
  bootstrap: [RewardPage],
})
export class RewardModule {}
