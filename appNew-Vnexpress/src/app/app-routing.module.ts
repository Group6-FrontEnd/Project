import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { LoginSignComponent } from './components/login-sign/login-sign.component';

const routes: Routes = [
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: 'body', component: BodyComponent },
  // { path: 'login', component: LoginSignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }