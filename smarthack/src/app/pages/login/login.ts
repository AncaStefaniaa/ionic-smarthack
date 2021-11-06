import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserData } from "../../providers/user-data";

import { UserOptions } from "../../interfaces/user-options";

import { LoginService } from "./login.service";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage {
  login: UserOptions = { username: "", password: "" };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public loginService: LoginService
  ) {}

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.loginService.login(this.login).subscribe((res) => {
        console.log(res);
        this.userData.login(this.login.username);
        this.router.navigateByUrl("/app/tabs/schedule");
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl("/signup");
  }
}
