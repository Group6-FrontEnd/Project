import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInforComponent } from './edit-infor.component';
import { EditInforRoutingModule } from './edit-infor-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    EditInforComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    EditInforRoutingModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class EditInforModule { }
