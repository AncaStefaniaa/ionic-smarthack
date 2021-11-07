import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { RewardService } from "../reward/reward.service";

@Component({
  selector: "app-reward-modal",
  templateUrl: "./reward-modal.page.html",
  styleUrls: ["./reward-modal.page.scss"],
})
export class RewardModalPage implements OnInit {
  @Input()
  reward: any;

  isError = false;

  constructor(
    public modalController: ModalController,
    private rewardService: RewardService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  async redeem() {
    this.isError = false;
    const obs = await this.rewardService.redeem({ rewardId: this.reward.id });
    obs.subscribe(
      (res) => {
        this.onSuccess(res);
      },
      () => {
        this.onError();
      }
    );
  }

  onSuccess({ code }) {
    this.isError = false;
    this.reward = {
      ...this.reward,
      code,
      completed: true,
    };
    window.dispatchEvent(new CustomEvent("user:update"));
    window.dispatchEvent(new CustomEvent("rewards:update"));
  }

  onError() {
    console.log("Error redeem");
    this.isError = true;
  }
}
