import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseApiService } from 'src/app/shared/services';
import { ConfigService } from 'src/app/shared/utils';


@Injectable({ providedIn: 'root' })
export class InventoryService extends BaseApiService {

  baseApiUrl = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseApiUrl = configService.getApiUri();
  }

  getItems() {
    return this.http.get<any>(`${this.baseApiUrl}/warehouse/items`)
      .pipe(map(data => data));
  }
}
