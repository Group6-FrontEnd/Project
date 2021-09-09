import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  hide = true;
  public account: Account[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.currentAccount.subscribe(name => {
      this.account = name;
    });
  }
}
