import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ChallengeService {
  apiUrl: string = "https://192.168.100.32:8080/api";

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  async getAll() {
    const jwt = await this.storage.get("token");
    return this.httpClient.get<any>(`${this.apiUrl}/challenges`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }

  async get(id) {
    const jwt = await this.storage.get("token");
    return this.httpClient.get<any>(`${this.apiUrl}/challenges/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      }),
    });
  }

  async sendImage(challengeId, b64Image) {
    const jwt = await this.storage.get("token");
    return this.httpClient.post<any>(
      `${this.apiUrl}/completeChallenge`,
      { challengeId, b64Image },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        }),
      }
    );
  }

  // dataURItoBlob(dataURI) {
  //   const byteString = window.atob(dataURI);
  //   const arrayBuffer = new ArrayBuffer(byteString.length);
  //   const int8Array = new Uint8Array(arrayBuffer);

  //   for (let i = 0; i < byteString.length; i++) {
  //     int8Array[i] = byteString.charCodeAt(i);
  //   }

  //   const blob = new Blob([int8Array], { type: "image/jpeg" });

  //   return blob;
  // }
}
