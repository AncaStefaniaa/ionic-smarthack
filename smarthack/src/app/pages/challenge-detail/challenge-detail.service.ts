import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ChallengeService {
  constructor(private httpClient: HttpClient) {}

  sendImage(imageData) {
    // const date = new Date().valueOf();
    // const imageName = date + ".jpeg";

    // const imageBlob = this.dataURItoBlob(imageData);
    // const imageFile = new File([imageBlob], imageName, { type: "image/jpeg" });

    // let formData = new FormData();
    // formData.append("file", imageBlob, imageName);

    // var options = { content: formData };

    return this.httpClient.post<any>(
      "http://192.168.100.32:8080/api/completeChallenge",
      imageData
    );
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: "image/jpeg" });

    return blob;
  }
}
