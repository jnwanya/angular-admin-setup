import {EventEmitter, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AsyncSubject, Observable, Observer, throwError} from 'rxjs';
import {Store, select} from '@ngrx/store';
import * as fromStore from '../../store';
import {catchError, switchMap, take} from 'rxjs/operators';
import {AppConstant} from '../utils/app-constant';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  // static headers = {};
  // httpError: EventEmitter<HttpErrorResponse> = new EventEmitter();

  constructor(private store: Store<fromStore.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.pipe(select(fromStore.getAccessToken)).pipe(take(1)).pipe(switchMap(accessToken => {
      const token = accessToken ? accessToken.token : '';
      let header = new HttpHeaders();
      header = header.set('Authorization', `Bearer ${token}`)
        .set('client-key', environment.client_key)
        .set('Content-Type', 'application/json; charset=utf-8');
     // console.log('IT IS HERE ----', header);
      const copiedReq = req.clone({headers: header});
     // console.log('copiedReq', copiedReq)
      return next.handle(copiedReq).pipe(catchError(err => {
        console.log('error log: ', err);
        return throwError(err);
      }));
    }));
   /* const token = LocalStorageService.getToken();
    if (token) {
      const headers = {Authorization: `Bearer ${token}`};
      Object.keys(HttpInterceptorService.headers).forEach((header) => {
        if (!HttpInterceptorService.headers[header]) {
          return;
        }
        headers[header] = HttpInterceptorService.headers[header];
      });
      req = req.clone({setHeaders: headers});
    }
    const handled: Observable<HttpEvent<any>> = next.handle(req);
    const subject: AsyncSubject<HttpEvent<any>> = new AsyncSubject();
    handled.subscribe(subject);
    subject.subscribe((event: HttpEvent<any>) => {
      if (event instanceof HttpErrorResponse) {
        if (event.status === 401) {
          return;
        }
        this.httpError.emit(event);
      }
    }, (err: HttpEvent<any>) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          return;
        }
        if (err.status === 404) {
          return;
        }
        this.httpError.emit(err);
      }
    });
    return Observable.create((obs: Observer<HttpEvent<any>>) => {
      subject.subscribe(obs);
    }); */
  }


}
