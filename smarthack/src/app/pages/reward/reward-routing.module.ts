import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RewardPage } from './reward';

const routes: Routes = [
  {
    path: '',
    component: RewardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardPageRoutingModule { }
