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
    return this.httpClient.post<any>(`${this.apiUrl}/authenticate`, userData);
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

  hasFavorite(sessionName: string): boolean {
    return this.favorites.indexOf(sessionName) > -1;
  }

  addFavorite(sessionName: string): void {
    this.favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }

  logout(): Promise<any> {
    return this.storage
      .remove(this.HAS_LOGGED_IN)
      .then(() => {
        return this.storage.remove("username");
      })
      .then(() => {
        window.dispatchEvent(new CustomEvent("user:logout"));
      });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set("username", username);
  }

  getUsername(): Promise<string> {
    return this.storage.get("username").then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
