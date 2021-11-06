import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChallengeListPage } from "./challenge-list";
const routes: Routes = [
  {
    path: "",
    component: ChallengeListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeListPageRoutingModule {}
