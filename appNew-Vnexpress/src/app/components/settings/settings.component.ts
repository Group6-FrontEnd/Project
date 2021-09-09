import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  themeColor = localStorage.getItem('theme-color');  

  constructor( private router: Router) { }
  ngOnInit(): void {}

  removeUser(){
    if(confirm("bạn có muốn xóa tài khoản này không")){
      this.router.navigateByUrl('login');
    }

  }
  discoloration(theme: string) {
    localStorage.discoloration('theme-color',theme);
    this.themeColor = localStorage.getItem('theme-color');
  }}