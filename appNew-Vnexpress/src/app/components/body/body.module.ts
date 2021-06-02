import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class BodyModule { }
