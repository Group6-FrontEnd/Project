import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-infor',
  templateUrl: './edit-infor.component.html',
  styleUrls: ['./edit-infor.component.scss']
})
export class EditInforComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name: String = 'Ly Na';

  constructor() { }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
