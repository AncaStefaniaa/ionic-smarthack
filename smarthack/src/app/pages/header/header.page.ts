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
      this.avatar =
        res.imageUrl ||
        "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y";
      this.name = res.firstName;
      this.balance = 10;
    });
  }

  listenForEvents() {
    window.addEventListener('user:update', () => {
      this.fetch();
    });
  }
}
