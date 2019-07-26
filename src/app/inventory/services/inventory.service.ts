import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseApiService } from 'src/app/shared/services';
import { ConfigService } from 'src/app/shared/services';


@Injectable({ providedIn: 'root' })
export class InventoryService extends BaseApiService {

  baseApiUrl = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseApiUrl = configService.getApiUri();
  }

  getManifests() {
    return this.http.get<any>(`${this.baseApiUrl}/inventory/manifest`)
      .pipe(map(data => data));
  }

  getManifestById(id: string) {
    return this.http.get<any>(`${this.baseApiUrl}/inventory/manifest/${id}`)
      .pipe(map(data => data));
  }

  getManifestItems(id: string) {
    return this.http.get<any>(`${this.baseApiUrl}/inventory/manifest/${id}/items`)
      .pipe(map(data => data));
  }

  add(inventoryItem: { number: string, type: string, status: string, units: number }) {
    return this.http.post<any>(`${this.baseApiUrl}/inventory`, inventoryItem)
      .pipe(map(data => data));
  }
}
