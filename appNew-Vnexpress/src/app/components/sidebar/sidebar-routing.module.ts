import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from '../body/home-detail/home-detail.component';
import { HomePageComponent } from '../body/home-page/home-page.component';
import { EditInforComponent } from '../edit-infor/edit-infor.component';
import { LoginSignComponent } from '../login-sign/login-sign.component';

const routes: Routes = [
  { path: 'home-detail/:id', component: HomeDetailComponent },
  { path: 'home-page', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }
