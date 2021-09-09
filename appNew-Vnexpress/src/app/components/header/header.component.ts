import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';

import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { Account } from 'src/app/models/account';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   public account: Account[]=[];
  //  url = 'https://i.pinimg.com/236x/88/17/e2/8817e2e498c18da5942df9fdba279e04.jpg';
  visible:boolean = true;

  watcher: Subscription;
  constructor(private sidebarService: SidebarService,
    private accountService: AccountService,
    private mediaObserver: MediaObserver) {
      this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
        if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
          this.sidebarService.sidebarStateChanged$.next('close');
        } else {
          this.sidebarService.sidebarStateChanged$.next('open');
        }
      });
  }

  ngOnInit() {
    this.load();
  }
  toggleSideNav() {
    this.sidebarService.toggle();
  }
  load(){
    this.accountService.currentAccount.subscribe(name => {
      this.account = name;
      console.log('account: ',this.account);
    });
  }
}