import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChallengeDetailPage } from "./challenge-detail";

const routes: Routes = [
  {
    path: "",
    component: ChallengeDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeDetailPageRoutingModule {}
