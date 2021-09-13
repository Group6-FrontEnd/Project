import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from 'src/app/models/left-menu';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarState = 'open';
  public sidebarStateChanged$ = new BehaviorSubject<string>(this.sidebarState);
  public sidebarStateObservable$ = this.sidebarStateChanged$.asObservable();

  constructor() {
    this.sidebarStateChanged$.next('open');
  }

  toggle() {
    this.sidebarState = this.sidebarState === 'open' ? 'close' : 'open';
    this.sidebarStateChanged$.next(this.sidebarState);
  }
//   public getSidebars() {

//     let menu:Menu[]=[];
//     return menu;               
// }
// public getSidebar(id:any) {
//   let menu:Menu[]=this.getSidebars();
//   return menu.find(p => p.url==id);
// }
}