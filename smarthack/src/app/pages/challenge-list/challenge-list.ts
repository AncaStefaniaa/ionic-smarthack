import { Component, OnInit } from "@angular/core";
import { ChallengeService } from "../../providers/challenge.service";
import { ConferenceData } from "../../providers/conference-data";
import { UserData } from "../../providers/user-data";

@Component({
  selector: "page-speaker-list",
  templateUrl: "challenge-list.html",
  styleUrls: ["./challenge-list.scss"],
})
export class ChallengeListPage implements OnInit {
  isLoading = false;
  challenges = [];
  currentUser;

  constructor(
    public challengeService: ChallengeService,
    public userData: UserData
  ) {}

  ngOnInit() {}

  async ionViewDidEnter() {
    this.isLoading = true;

    const userObs = await this.userData.account();
    userObs.subscribe((res) => {
      this.currentUser = res;
    });

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
    this.challenges = data.sort((x, y) =>
      x.completed === y.completed ? 0 : x.completed ? 1 : -1
    );
  }

  onError() {
    console.log("Error fetching rewards");
  }
}
