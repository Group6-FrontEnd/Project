import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BodyModule } from './components/body/body.module';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginSignModule } from './components/login-sign/login-sign.module';

import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BodyModule,
    HeaderModule,
    SidebarModule,
    MatSidenavModule,
    LoginSignModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
