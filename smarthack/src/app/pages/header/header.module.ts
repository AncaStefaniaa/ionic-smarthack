import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { Header } from "./header.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [Header],
  exports: [Header],
})
export class HeaderModule {}
