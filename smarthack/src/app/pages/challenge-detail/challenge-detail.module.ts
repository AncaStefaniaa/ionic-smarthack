import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChallengeDetailPage } from "./challenge-detail";
import { ChallengeDetailPageRoutingModule } from "./challenge-detail-routing.module";
import { IonicModule } from "@ionic/angular";
import { GenericResultModalPageModule } from "../generic-result-modal/generic-result-modal.module";
import { GenericResultModalPage } from "../generic-result-modal/generic-result-modal.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChallengeDetailPageRoutingModule,
    GenericResultModalPageModule,
  ],
  declarations: [ChallengeDetailPage],
  entryComponents: [GenericResultModalPage],
})
export class ChallengeDetailModule {}
