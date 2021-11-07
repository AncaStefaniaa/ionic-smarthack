import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { GenericResultModalPage } from "./generic-result-modal.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [GenericResultModalPage],
})
export class GenericResultModalPageModule {}
