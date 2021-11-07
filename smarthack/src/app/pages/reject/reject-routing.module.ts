import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RejectPage } from "./reject";

const routes: Routes = [
  {
    path: "",
    component: RejectPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectPageRoutingModule {}
