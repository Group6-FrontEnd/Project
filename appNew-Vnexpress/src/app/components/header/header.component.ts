import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Ly Na';
  password: string = '123';
  constructor(private sidebarService: SidebarService,
    private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.currentAccount.subscribe(name => this.name = name);
  }
  toggleSideNav() {
    this.sidebarService.toggle();
  }
}