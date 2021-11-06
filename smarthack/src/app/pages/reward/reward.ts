import { Component } from "@angular/core";

@Component({
  selector: "page-reward",
  templateUrl: "reward.html",
  styleUrls: ["./reward.scss"],
})
export class RewardPage {
  groupedRewards = [
    { name: "a", rewards: [1, 2, 3] },
    { name: "b", rewards: [1, 2, 3] },
  ];

  constructor() {}
}
