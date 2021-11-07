import { Component, OnInit } from "@angular/core";
import { ChallengeService } from "../../providers/challenge.service";
import { ConferenceData } from "../../providers/conference-data";

@Component({
  selector: "page-speaker-list",
  templateUrl: "challenge-list.html",
  styleUrls: ["./challenge-list.scss"],
})
export class ChallengeListPage implements OnInit {
  isLoading = false;
  challenges = [];
  currentUser = { name: "George" }

  constructor(public challengeService: ChallengeService) {}

  async ngOnInit() {
    this.isLoading = true;
    const obs = await this.challengeService.getAll();
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
    console.log("challenges", data);
    this.challenges = data.sort((x, y) =>
      x.completed === y.completed ? 0 : x.completed ? 1 : -1
    );
  }

  onError() {
    console.log("Error fetching rewards");
  }
}
