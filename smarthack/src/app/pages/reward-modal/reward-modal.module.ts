import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RewardModalPage } from "./reward-modal.page";
import { RewardModule } from "../reward/reward.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RewardModule],
  declarations: [RewardModalPage],
})
export class RewardModalPageModule {}
