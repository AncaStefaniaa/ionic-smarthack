import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-generic-result-modal",
  templateUrl: "./generic-result-modal.page.html",
  styleUrls: ["./generic-result-modal.page.scss"],
})
export class GenericResultModalPage implements OnInit {
  @Input() success: boolean;
  @Input() redirect: string;

  constructor(public modalController: ModalController, public router: Router) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  onRedirect() {
    this.router.navigateByUrl(this.redirect);
    this.dismiss();
  }
}
