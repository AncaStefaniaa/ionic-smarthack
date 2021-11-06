import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { UserData } from "../../providers/user-data";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage {
  login: any = { login: "", password: "" };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public storage: Storage
  ) {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(form.value).subscribe(async ({ id_token }) => {
        await this.storage.set("token", id_token);
        this.router.navigateByUrl("/app/tabs/challenges");
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl("/signup");
  }
}
