import { Component, OnInit } from "@angular/core";
import { RewardService } from "./reward.service";

@Component({
  selector: "page-reward",
  templateUrl: "reward.html",
  styleUrls: ["./reward.scss"],
})
export class RewardPage implements OnInit {
  isLoading = false;
  groupedRewards = [];

  constructor(private rewardsService: RewardService) {}

  ngOnInit() {
    this.isLoading = true;

    this.rewardsService.getAll().subscribe(
      (res) => {
        this.isLoading = false;
        this.onSuccess(res);
      },
      () => {
        this.isLoading = false;
        this.onError();
      }
    );
  }

  onSuccess(data) {
    const groups = {};
    data.forEach((reward) => {
      const company = reward.company.id;
      const current = groups[company] || [];
      groups[company] = [...current, reward];
    });
    this.groupedRewards = Object.values(groups).map((group) => ({
      name: group[0].company.name,
      rewards: group,
    }));
  }

  onError() {
    console.log("Error fetching rewards");
  }
}
