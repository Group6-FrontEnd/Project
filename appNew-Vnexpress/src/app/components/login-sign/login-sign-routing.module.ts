import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailComponent } from '../body/home-detail/home-detail.component';

const routes: Routes = [
  { path: 'home-detail', component: HomeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignRoutingModule { }
