import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {AuthenticatedUserDetail} from '../models/authenticated-user-detail';
import {map} from 'rxjs/operators';
import {TokenDetail} from '../models/token-detail';
import {Injectable} from '@angular/core';

@Injectable()
export class AccessService {
   constructor(private httpClient: HttpClient) {}

  getAuthenticatedUserDetails(): Observable<AuthenticatedUserDetail> {
    return this.httpClient.get(`${environment.baseUrl}/v1/api/app/user`)
      .pipe(map((response: {message: string, data: AuthenticatedUserDetail}) => response.data));
  }

  renewAccessToken(data: any): Observable<TokenDetail> {
    return this.httpClient.post(`${environment.baseUrl}/v1/api/app/auth/retrieve-access-token`, data)
      .pipe(map((response: {message: string, data: TokenDetail}) => response.data));
  }
  processLogin(data: any): Observable<{message: string, data: any}> {
    return this.httpClient.post(`${environment.baseUrl}/v1/api/app/auth/login`, data)
      .pipe(map((response: {message: string, data: any}) => response));
  }
}
