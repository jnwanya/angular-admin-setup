import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtranetComponent } from './layout/extranet/extranet.component';
import { IntranetComponent } from './layout/intranet/intranet.component';
import { BreadcrumbComponent } from './layout/intranet/breadcrumb/breadcrumb.component';
import { SharedModule} from './shared/shared.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/intranet/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {reducers} from './store/reducers';
import {effects} from './store/effects';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './shared/services/http-interceptor-service.service';
import {DataStorageService} from './shared/services/data-storage.service';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import {AccessService} from './access/access.service';
import {AuthenticationGuard} from './shared/guard/authentication.guard';
import {ToastrModule} from 'ngx-toastr';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ExtranetComponent,
    IntranetComponent,
    BreadcrumbComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    ToastrModule.forRoot(),
    environment.imports,
    NgxLocalStorageModule.forRoot({
      prefix: 'ota-admin',
      allowNull: true
    }),

  ],
  providers: [AuthenticationGuard, {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}, DataStorageService, AccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
