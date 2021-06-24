import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../body/home-page/home-page.component';
import { LoginSignComponent } from '../login-sign/login-sign.component';
import { Error404Component } from '../error404/error404.component';
import { SettingsComponent } from '../settings/settings.component';
import { HistoryComponent } from '../history/history.component';

const routes: Routes = [
  { path: 'login', component: LoginSignComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'settings', component: HistoryComponent},
  { path: '**', component: Error404Component},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
