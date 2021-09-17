import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';

import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);  
  }
}

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {
  hide = true;
  public account: Account[] = [];
  passwordOld = new FormControl('', [Validators.required]);
  myForm!: FormGroup;
  visible: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      passwordNew: ['', [Validators.required]],
      confirmNewPassword: ['']
    }, { validator: this.checkPasswordsNew })
  }

  ngOnInit(): void {
    this.accountService.currentAccount.subscribe(name => {
      this.account = name;
    });

  }
  checkPasswordsNew(group: FormGroup) {
    let passwordNew = group.controls.passwordNew.value;
    let confirmNewPassword = group.controls.confirmNewPassword.value;

    return passwordNew === confirmNewPassword ? null : { notSame: true }
  }

}