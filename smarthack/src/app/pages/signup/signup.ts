import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { UserData } from "../../providers/user-data";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html",
  styleUrls: ["./signup.scss"],
})
export class SignupPage {
  signup: any = { firstName: "", login: "", password: "" };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    public storage: Storage
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(form.value).subscribe(async ({ id_token }) => {
        await this.storage.set("token", id_token);
        this.router.navigateByUrl("/app/tabs/challenges");
      });
    }
  }
}
