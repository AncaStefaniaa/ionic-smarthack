import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = "hasLoggedIn";
  HAS_SEEN_TUTORIAL = "hasSeenTutorial";
  apiUrl: string = "https://192.168.100.32:8080/api";

  constructor(public storage: Storage, private httpClient: HttpClient) {}

  signup(userData) {
    return this.httpClient.post<any>(`${this.apiUrl}/register`, userData);
  }

  login(userData) {
    return this.httpClient.post<any>(`${this.apiUrl}/authenticate`, userData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    });
  }

  async account() {
    const jwt = await this.storage.get("token");
    return this.httpClient.get<any>(`${this.apiUrl}/account`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get("token").then((value) => {
      return value === true;
    });
  }
}
