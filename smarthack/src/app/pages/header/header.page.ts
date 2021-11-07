import { Component, Input, OnInit } from "@angular/core";
import { UserData } from "../../providers/user-data";

@Component({
  selector: "app-header",
  templateUrl: "./header.page.html",
  styleUrls: ["./header.page.scss"],
})
export class Header implements OnInit {
  avatar: string;
  name: string;
  balance: number;

  constructor(private userData: UserData) {}

  ngOnInit() {
    this.fetch();
    this.listenForEvents();
  }

  async fetch() {
    console.log("fetch profile");
    const obs = await this.userData.account();
    obs.subscribe((res) => {
      this.name = res.firstName;
      this.balance = res.balance;
    });
  }

  listenForEvents() {
    window.addEventListener('user:update', () => {
      this.fetch();
    });
  }
}
