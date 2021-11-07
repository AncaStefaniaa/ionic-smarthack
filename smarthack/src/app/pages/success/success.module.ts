import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { SuccessPage } from "./success";
import { SuccessPageRoutingModule } from "./success-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SuccessPageRoutingModule],
  declarations: [SuccessPage],
})
export class SuccessModule {}
