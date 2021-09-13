import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDetailComponent } from '../body/home-detail/home-detail.component';
import { HomePageComponent } from '../body/home-page/home-page.component';
import { EditInforComponent } from '../edit-infor/edit-infor.component';
import { LoginSignComponent } from '../login-sign/login-sign.component';
import { Error404Component } from '../error404/error404.component';
import { SettingsComponent } from '../settings/settings.component';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { HistoryComponent } from '../history/history.component';

const routes: Routes = [
  { path: 'login', component: LoginSignComponent },
  { path: 'editInfor', component: EditInforComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'home-detail/:id', component: HomeDetailComponent },
  { path: 'changePass', component: ChangePassComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: Error404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
