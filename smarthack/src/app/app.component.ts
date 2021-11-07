import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import { MenuController, Platform, ToastController } from "@ionic/angular";

import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Storage } from "@ionic/storage";

import { UserData } from "./providers/user-data";
import { ChallengeService } from "./providers/challenge.service";
import { LoadingService } from "./loading.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  address:string = '';
  appPages = [
    {
      title: "Feed",
      url: "/app/tabs/schedule",
      icon: "list",
    },
    {
      title: "Challenges",
      url: "/app/tabs/challenges",
      icon: "medal",
    },
    {
      title: "Rewards",
      url: "/app/tabs/reward",
      icon: "star",
    },
  ];
  loggedIn = false;
  dark = false;
  img = "../assets/img/speakers/logo.png";
  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private challengeService: ChallengeService,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    public loadingService: LoadingService
  ) {
    this.initializeApp();

    // if (userData.isLoggedIn()) {
    //   router.navigateByUrl("/app/tabs/challenges");
    // }
  }

  async ngOnInit() {
    const userObs = await this.userData.account();
    userObs.subscribe((res) => {
      this.address = res.walletAddress;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
