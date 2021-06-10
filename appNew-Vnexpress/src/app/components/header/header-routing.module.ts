import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../body/home-page/home-page.component';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { EditInforComponent } from '../edit-infor/edit-infor.component';
import { Error404Component } from '../error404/error404.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { LoginSignComponent } from '../login-sign/login-sign.component';
import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginSignComponent },
  { path: 'edit-info', component: EditInforComponent },
  { path: 'changePass', component: ChangePassComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
