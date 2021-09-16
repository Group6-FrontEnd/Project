import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss'],
})
export class LoginSignComponent implements OnInit {
  flag: boolean = true;
  passwordType: string = 'password';
  passwordShown: boolean = false;

  public accounts: Account[] = [
    { id: '1', name: 'van_truong', email: 'truong@gmail.com', password: '123', image: 'https://i.pinimg.com/236x/88/17/e2/8817e2e498c18da5942df9fdba279e04.jpg' },
    { id: '2', name: 'Ly Na', email: 'na@gmail.com', password: '123', image: 'https://i.pinimg.com/236x/88/17/e2/8817e2e498c18da5942df9fdba279e04.jpg' },
    { id: '3', name: 'tan_phat', email: 'phat@gmail.com', password: '123', image: 'https://i.pinimg.com/236x/88/17/e2/8817e2e498c18da5942df9fdba279e04.jpg' }];
  public account: Account[] = [];
  successMessage: string = ""
  loginForm!: FormGroup;
  regForm!: FormGroup;

  apply(value: string) {
    this.flag = value == "login" ? true : false;
  }

  constructor(private accountService: AccountService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.loadData();
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9@!_]{6,}")]]
    })
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com"), Validators.min(100000000000), Validators.max(99999999999)]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9@!_]{6,}")]]
    })
  }
  login() {
    this.accountService.changeMessage(this.accounts);
    this.successMessage = "Successfully Loggined/Register In ... "
  }
  public showHidden() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
    } else {
      this.passwordShown = true;
      this.passwordType = '!password';
    }
  }
  private loadData() {
    this.accountService.currentAccount.subscribe((data) => {
      console.log('getAccount', data);
      this.account = data;
      console.log('AccountNew', this.account);
    });
  }
}
