import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignComponent } from './login-sign.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginSignRoutingModule } from './login-sign-routing.module';

@NgModule({
  declarations: [LoginSignComponent],
  imports: [
    CommonModule,
    LoginSignRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginSignComponent,
  ]
})
export class LoginSignModule { }