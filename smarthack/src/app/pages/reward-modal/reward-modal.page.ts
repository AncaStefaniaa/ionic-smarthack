import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-reward-modal",
  templateUrl: "./reward-modal.page.html",
  styleUrls: ["./reward-modal.page.scss"],
})
export class RewardModalPage implements OnInit {
  @Input()
  reward: any;

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
