import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInforComponent } from './edit-infor.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { EditInforRoutingModule } from './edit-infor-routing.module';
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
    EditInforRoutingModule
  ]
})
export class EditInforModule { }
