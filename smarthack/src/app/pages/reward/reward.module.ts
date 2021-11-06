import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { RewardPage } from "./reward";
import { RewardPageRoutingModule } from "./reward-routing.module";
import { RewardSlider } from "../reward-slider/reward-slider";
import { RewardModalPage } from "../reward-modal/reward-modal.page";
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RewardPageRoutingModule,
    HeaderModule
  ],
  declarations: [RewardPage, RewardSlider, RewardModalPage],
  entryComponents: [RewardSlider, RewardModalPage],
  bootstrap: [RewardPage],
})
export class RewardModule {}
