import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyModule } from './components/body/body.module';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { EditInforModule } from './components/edit-infor/edit-infor.module';
import { ChangePassModule } from './components/change-pass/change-pass.module';
import { FeedbackModule } from './components/feedback/feedback.module';
import { Error404Module } from './components/error404/error404.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginSignModule } from './components/login-sign/login-sign.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BodyModule,
    HeaderModule,
    SidebarModule,
    MatSidenavModule,
    LoginSignModule,
    EditInforModule,
    ChangePassModule,
    FeedbackModule,
    Error404Module,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
