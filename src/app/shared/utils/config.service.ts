import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    apiUri: string;

    constructor() {
        this.apiUri = 'http://localhost:5050/api';
    }

    getApiUri() {
        return this.apiUri;
    }
}
