import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class BodyModule { }
