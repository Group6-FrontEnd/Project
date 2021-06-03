import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss']
})
export class LoginSignComponent implements OnInit {
  name: string = 'Ly Na';
  password: string = '123';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.currentAccount.subscribe(name => this.name = name);
  }
  login() {
    this.accountService.changeMessage(this.name);
  }
}
