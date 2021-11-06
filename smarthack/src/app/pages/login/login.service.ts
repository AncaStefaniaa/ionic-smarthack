import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private widgetNames = ['production-workbench-ui-pwb-comments-widget'];

    constructor(private httpClient: HttpClient) {

    }

    getTranslation() {
        return this.httpClient.get('');
    }
}