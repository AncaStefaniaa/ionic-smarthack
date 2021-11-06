import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs-page";
import { TabsPageRoutingModule } from "./tabs-page-routing.module";

import { AboutModule } from "../about/about.module";
import { MapModule } from "../map/map.module";
import { ScheduleModule } from "../schedule/schedule.module";
import { SessionDetailModule } from "../session-detail/session-detail.module";
import { ChallengeDetailModule } from "../challenge-detail/challenge-detail.module";
import { ChallengeListModule } from "../challenge-list/challenge-list.module";

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    ChallengeDetailModule,
    ChallengeListModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
})
export class TabsModule {}
