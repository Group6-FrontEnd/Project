import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeDetailComponent } from './home-detail/home-detail.component';

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyRoutingModule } from './body-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class BodyModule { }
