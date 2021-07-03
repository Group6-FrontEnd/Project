import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedNewsComponent } from './saved-news.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SavedNewsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class SavedNewsModule { }
