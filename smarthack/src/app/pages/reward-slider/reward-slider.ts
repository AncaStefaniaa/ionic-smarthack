import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { RewardModalPage } from "../reward-modal/reward-modal.page";

@Component({
  selector: "reward-slider",
  template: `
    <h3 class="ion-padding-top ion-padding-start">{{ name }}</h3>
    <ion-slides [options]="option" class="ion-margin-top">
      <ion-slide *ngFor="let reward of rewards">
        <ion-card
          (click)="claimReward(reward)"
          [class]="reward.completed ? 'redeemed' : ''"
        >
          <ion-card-header>
            <ion-avatar style="display: inline">
              <img [src]="reward.icon.url" />
            </ion-avatar>
            <ion-card-title class="reward-title">{{
              reward.content
            }}</ion-card-title>
            <ion-card-subtitle *ngIf="!reward.completed"
              >{{ reward.value }} Deed</ion-card-subtitle
            >
          </ion-card-header>
        </ion-card>
      </ion-slide>
    </ion-slides>
  `,
  styleUrls: ["./reward-slider.scss"],
})
export class RewardSlider {
  @Input()
  name: string;

  @Input()
  rewards: any;

  option = {
    slidesPerView: 2.5,
  };

  constructor(public modalController: ModalController) {}

  async claimReward(reward) {
    const modal = await this.modalController.create({
      component: RewardModalPage,
      componentProps: {
        reward,
      },
    });
    return await modal.present();
  }
}
