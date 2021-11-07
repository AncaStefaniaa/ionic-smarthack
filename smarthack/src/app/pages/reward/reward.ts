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
    window.addEventListener("rewards:update", () => {
      this.fetch();
    });
  }

  async ionViewDidEnter() {
    this.fetch();
  }

  async fetch() {
    this.isLoading = true;

    const obs = await this.rewardsService.getAll();
    obs.subscribe(
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
    this.groupedRewards = Object.values(groups).map((group: any[]) => ({
      name: group[0].company.name,
      rewards: group.sort((x, y) =>
        x.completed === y.completed ? 0 : x.completed ? 1 : -1
      ),
    }));
  }

  onError() {
    console.log("Error fetching rewards");
  }
}
