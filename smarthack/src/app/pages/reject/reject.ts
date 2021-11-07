import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { UserData } from "../../providers/user-data";
import { createAnimation } from "@ionic/core";

@Component({
  selector: "reject",
  templateUrl: "reject.html",
  styleUrls: ["./reject.scss"],
})
export class RejectPage implements OnInit {
  constructor(
    public router: Router,
    public userData: UserData,
    public storage: Storage
  ) {}

  ngOnInit() {
    const animation = createAnimation()
      .addElement(document.querySelector(".img"))
      .easing("ease-in-out")
      .duration(1000)
      .direction("alternate")
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: "scale(1)", opacity: "1" },
        { offset: 1, transform: "scale(1.5)", opacity: "0.5" },
      ]);

    animation.play();
  }
}
