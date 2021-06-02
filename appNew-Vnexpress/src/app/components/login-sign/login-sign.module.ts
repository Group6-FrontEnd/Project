import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignComponent } from './login-sign.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [LoginSignComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
    LoginSignComponent,
  ]
})
export class LoginSignModule { }