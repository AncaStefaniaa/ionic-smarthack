import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChallengeDetailPage } from "./challenge-detail";
import { ChallengeDetailPageRoutingModule } from "./challenge-detail-routing.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, IonicModule, ChallengeDetailPageRoutingModule],
  declarations: [ChallengeDetailPage],
})
export class ChallengeDetailModule {}
