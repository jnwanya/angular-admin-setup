import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtranetComponent } from './layout/extranet/extranet.component';
import { IntranetComponent } from './layout/intranet/intranet.component';
import { BreadcrumbComponent } from './layout/intranet/breadcrumb/breadcrumb.component';
import { SharedModule} from './shared/shared.module';
import { MenuItems} from './shared/menu-items/menu-items';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/intranet/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

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
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
