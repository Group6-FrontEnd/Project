import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { LoginSignComponent } from '../login-sign/login-sign.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { EditInforComponent } from '../edit-infor/edit-infor.component';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { Error404Component } from '../error404/error404.component';
const routes: Routes = [
  { path: 'login', component: LoginSignComponent },
  { path: 'editInfor', component: EditInforComponent },
  { path: 'changePass', component: ChangePassComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: Error404Component},
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
    MatBadgeModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }