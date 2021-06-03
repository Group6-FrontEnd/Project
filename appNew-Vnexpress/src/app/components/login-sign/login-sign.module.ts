import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignComponent } from './login-sign.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from '../body/body.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
];
@NgModule({
  declarations: [LoginSignComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    FormsModule
  ],
  exports: [
    LoginSignComponent,
  ]
})
export class LoginSignModule { }