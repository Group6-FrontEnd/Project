import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountSource = new BehaviorSubject('Đăng nhập');
  currentAccount = this.accountSource.asObservable();

  constructor() { }

  changeMessage(name: string) {
    this.accountSource.next(name);
  }
}
