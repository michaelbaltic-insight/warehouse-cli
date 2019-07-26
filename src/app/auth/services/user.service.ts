import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseApiService } from 'src/app/shared/services';
import { ConfigService } from 'src/app/shared/services';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseApiService {

  baseApiUrl = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();
    this.baseApiUrl = configService.getApiUri();
  }

  getMe(id: string) {
    return this.http.get<any>(`${this.baseApiUrl}/user/${id}`)
      .pipe(map(data => data.value));
  }
}
