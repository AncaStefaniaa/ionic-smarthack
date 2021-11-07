import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ActionSheetController, ModalController } from "@ionic/angular";

import {
  Camera,
  CameraOptions,
  PictureSourceType,
} from "@ionic-native/camera/ngx";
import { ChallengeService } from "../../providers/challenge.service";
import { GenericResultModalPage } from "../generic-result-modal/generic-result-modal.page";

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
    private modalController: ModalController,
    private challengeService: ChallengeService,
    public router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(async (params) => {
      const id = params["id"];
      const obs = await this.challengeService.get(id);
      obs.subscribe(
        (res) => {
          this.isLoading = false;
          this.challenge = res;
        },
        () => {
          this.isLoading = false;
          console.log("Error fetching rewards");
        }
      );
    });
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

    this.camera.getPicture(options).then(async (imageData) => {
      const obs = await this.challengeService.sendImage(
        this.challenge.id,
        imageData
      );
      obs.subscribe(
        ({ completed }) => {
          this.isLoading = false;
          this.showSuccessModal(completed);
        },
        () => {
          this.isLoading = false;
          this.showSuccessModal(false);
        }
      );
    });
  }

  async showSuccessModal(success) {
    const modal = await this.modalController.create({
      component: GenericResultModalPage,
      componentProps: {
        success,
        redirect: success
          ? "/app/tabs/schedule"
          : `/app/tabs/challenges/speaker-details/${this.challenge.id}`,
      },

      // this.challengeService.sendImage(base64Image).subscribe((res) => {
      //   console.log(res);
      //   if (res) {
      //     this.router.navigateByUrl("success");
      //   } else {
      //     this.router.navigateByUrl("reject");
      //   }
      // });
    });
    return await modal.present();
  }
}
