import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConferenceData } from "../../providers/conference-data";
import { ActionSheetController } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import {
  Camera,
  CameraOptions,
  PictureSourceType,
} from "@ionic-native/camera/ngx";
import { ChallengeService } from "./challenge-detail.service";
@Component({
  selector: "page-speaker-detail",
  templateUrl: "challenge-detail.html",
  styleUrls: ["./challenge-detail.scss"],
})
export class ChallengeDetailPage implements OnInit {
  isLoading = false;
  challenge: any;

  constructor(
    public camera: Camera,
    private route: ActivatedRoute,

    public challengeService: ChallengeService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.challengeService.get(id).subscribe(
        (res) => {
          this.isLoading = false;
          this.onSuccess(res);
        },
        () => {
          this.isLoading = false;
          this.onError();
        }
      );
    });
  }

  onSuccess(data) {
    this.challenge = data;
  }

  onError() {
    console.log("Error fetching rewards");
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: sourceType,
      targetHeight: 500,
      targetWidth: 500,
    };

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = "data:image/jpeg;base64," + imageData;

      console.log(base64Image);
      this.challengeService
        .sendImage(this.challenge.id, base64Image)
        .subscribe((res) => {
          console.log(res);
        });
    });
  }
}
