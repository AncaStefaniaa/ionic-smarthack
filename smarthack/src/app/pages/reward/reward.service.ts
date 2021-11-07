import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class RewardService {
  apiUrl: string = "https://192.168.100.32:8080/api";

  constructor(protected httpClient: HttpClient, private storage: Storage) {}

  async getAll() {
    const jwt = await this.storage.get("token");
    return this.httpClient.get<any>(`${this.apiUrl}/rewards`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }

  async redeem(data) {
    const jwt = await this.storage.get("token");
    return this.httpClient.post<any>(`${this.apiUrl}/redeemReward`, data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }
}
