import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseObject } from 'src/app/models/responseObject';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public  responseObject = 
      [{
        title: '',
        pubDate: '',
        link: '',
        guid: '',
        author: '',
        thumbnail: '',
        description: '',
        content: '',
        enclosure: {
        },
        categories: [
        ]
  }];
  private historySource = new BehaviorSubject(this.responseObject);
  currentHistory = this.historySource.asObservable();
  constructor() { 
    this.responseObject.splice(0,1);
  }

  changeMessage(name: any) {
    this.historySource.next(name);
  }
  getRss(name:any){
  this.responseObject.push(name);
  console.log('uuuuuuuuuuu',this.responseObject);
  return  this.responseObject;
 
  }
}
