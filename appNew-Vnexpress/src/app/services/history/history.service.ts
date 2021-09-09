import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseObject } from 'src/app/models/responseObject';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  public histories =
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

  private historySource = new BehaviorSubject(this.histories);
  currentHistory = this.historySource.asObservable();
  constructor() {
    this.histories.splice(0, 1);
  }

  changeMessage(name: any) {
    this.historySource.next(name);
  }
  getRss(name: any) {
    this.histories.push(name);
    console.log('histories[]: ', this.histories);
    return this.histories;
  }
  check(checkItem: any): boolean {
    let result = false;
    this.histories.forEach(readItem => {
      if (readItem.title === checkItem.title && readItem.pubDate === checkItem.pubDate && readItem.content === checkItem.content && readItem.link === checkItem.link) {
        result = true;
      }
    });
    return result;
  }
}
