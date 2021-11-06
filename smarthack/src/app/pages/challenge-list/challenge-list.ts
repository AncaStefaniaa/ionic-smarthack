import { Component, OnInit } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { ChallengeService } from "../challenge-detail/challenge-detail.service";

@Component({
  selector: "page-speaker-list",
  templateUrl: "challenge-list.html",
  styleUrls: ["./challenge-list.scss"],
})
export class ChallengeListPage implements OnInit {
  isLoading = false;
  challenges = [];

  constructor(public challengeService: ChallengeService) {}

  ngOnInit() {
    this.isLoading = true;
    this.challengeService.getAll().subscribe(
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
    console.log(data);
    this.challenges = data;
  }

  onError() {
    console.log("Error fetching rewards");
  }
}
