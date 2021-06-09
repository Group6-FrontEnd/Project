import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarRoutingModule } from './sidebar-routing.module';
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTreeModule,
    MatMenuModule,
    SidebarRoutingModule
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }