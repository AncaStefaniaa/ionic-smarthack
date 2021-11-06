import { Component } from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";

@Component({
  selector: "page-speaker-list",
  templateUrl: "challenge-list.html",
  styleUrls: ["./challenge-list.scss"],
})
export class ChallengeListPage {
  speakers: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }
}
