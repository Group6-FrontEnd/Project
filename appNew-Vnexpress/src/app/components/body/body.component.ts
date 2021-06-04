import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appNew-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  view:string = 'Card';
  sort:string = 'Date';

  constructor() { }

  ngOnInit(): void {
  }

}
