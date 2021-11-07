import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { ChallengeListPage } from "./challenge-list";
import { ChallengeListPageRoutingModule } from "./challenge-list-routing.module";
import { ChallengeDetailModule } from "../challenge-detail/challenge-detail.module";
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChallengeListPageRoutingModule,
    ChallengeDetailModule,
    HeaderModule
  ],
  declarations: [ChallengeListPage],
})
export class ChallengeListModule {}
