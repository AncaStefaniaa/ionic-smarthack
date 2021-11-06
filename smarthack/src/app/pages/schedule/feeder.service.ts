import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class FeederService {
  apiUrl: string = "http://192.168.100.32:8080/api";

  constructor(protected http: HttpClient, private storage: Storage) {}

  getAll() {
    return this.http.get<any>(`${this.apiUrl}/posts`);
  }
}
