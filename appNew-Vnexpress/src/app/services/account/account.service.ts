import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from 'src/app/models/account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public accounts: Account[] = [];
  private accountSource = new BehaviorSubject(this.accounts);
  currentAccount = this.accountSource.asObservable();
  constructor() { }

  changeMessage(name: any) {
    this.accountSource.next(name);
  }
}
