import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  themeColor = localStorage.getItem('theme-color');  

  constructor() { }
  ngOnInit(): void {}

  removeUser(){
    alert("bạn có muốn xóa tài khoản này không");
  }
  discoloration(theme: string) {
    localStorage.discoloration('theme-color',theme);
    this.themeColor = localStorage.getItem('theme-color');
  }
}
