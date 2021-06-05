import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-sign',
  templateUrl: './login-sign.component.html',
  styleUrls: ['./login-sign.component.scss'],
})
export class LoginSignComponent implements OnInit {
  name: string = 'truong';
  email : String = 'vantruong@gmail.com';
  password: string = '123';
  flag:boolean = true
  
  successMessage:string=""
  loginForm!:FormGroup;
  regForm!:FormGroup;
  
  apply(value:string){
    this.flag = value == "login"?true:false;
  }
  
  constructor(private accountService: AccountService , private fb: FormBuilder) { }
  ngOnInit(): void {
    this.accountService.currentAccount.subscribe(name => this.name = name);
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9@!_]{6,}")]]
    })
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com") , Validators.min(100000000000), Validators.max(99999999999)]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9@!_]{6,}")]]
    })
  }
  login() {
    this.accountService.changeMessage(this.name);
    this.successMessage = "Successfully Loggined/Register In ... "
  }
}
