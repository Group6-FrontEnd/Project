import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class SettingsModule { }