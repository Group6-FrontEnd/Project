import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { EditInforComponent } from '../edit-infor/edit-infor.component';
import { Error404Component } from '../error404/error404.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { LoginSignComponent } from '../login-sign/login-sign.component';

const routes: Routes = [
  { path: 'login', component: LoginSignComponent },
  { path: 'editInfor', component: EditInforComponent },
  { path: 'changePass', component: ChangePassComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
