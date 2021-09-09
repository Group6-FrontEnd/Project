import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';

import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class Error404Module { }
