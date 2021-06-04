import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BodyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    FormsModule
  ]
})
export class BodyModule { }
