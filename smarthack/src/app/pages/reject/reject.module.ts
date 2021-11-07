import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { RejectPage } from "./reject";
import { RejectPageRoutingModule } from "./reject-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RejectPageRoutingModule],
  declarations: [RejectPage],
})
export class RejectModule {}
