import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-edit-infor',
  templateUrl: './edit-infor.component.html',
  styleUrls: ['./edit-infor.component.scss']
})
export class EditInforComponent implements OnInit {
  // url = 'https://i.pinimg.com/236x/88/17/e2/8817e2e498c18da5942df9fdba279e04.jpg';
  public account: Account[] = [];
  name= new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccount();
    
  }
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'Vui lòng nhập email!';
    }
    return this.email.hasError('email') ? 'email không hợp lệ' : '';
  }
  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'Vui lòng nhập tên!';
    }
    return this.name.hasError('name') ? 'tên không hợp lệ' : '';
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.account[0].image = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  clearFile() {
    this.account[0].image = '';
  }
  loadAccount() {
    this.accountService.currentAccount.subscribe(name => {
      this.account = name;
      console.log('account: ', this.account);
    });
  }

}
