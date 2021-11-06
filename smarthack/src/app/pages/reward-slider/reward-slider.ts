import { Component, Input } from "@angular/core";

@Component({
  selector: "reward-slider",
  template: `
    <h3 class="ion-padding-top ion-padding-start">{{ name }}</h3>
    <ion-slides [options]="option" class="ion-margin-top">
      <ion-slide *ngFor="let reward of rewards">
        <ion-card>
          <ion-card-header>
            <ion-avatar style="display: inline">
              <img [src]="reward.icon.url" />
            </ion-avatar>
            <ion-card-title>{{ reward.content }}</ion-card-title>
            <ion-card-subtitle>{{ reward.value }} Deed</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </ion-slide>
    </ion-slides>
  `,
})
export class RewardSlider {
  @Input()
  name: string;

  @Input()
  rewards: any;

  option = {
    slidesPerView: 2.5,
  };

  constructor() {}
}
