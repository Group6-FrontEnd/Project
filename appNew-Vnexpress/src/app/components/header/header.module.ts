import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignComponent } from '../login-sign/login-sign.component';
import {MatBadgeModule} from '@angular/material/badge';
const routes: Routes = [
  { path: 'login', component: LoginSignComponent },
];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }