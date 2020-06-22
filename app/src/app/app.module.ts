import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BannerComponent } from './banner/banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app.routing.module';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavBarComponent,
    InfoComponent,
    HomeComponent,
    LoginComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080'],
        sendAccessToken: true
      }})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
