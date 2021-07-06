import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedNewsService {

  public responseObject =
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

  private savedSource = new BehaviorSubject(this.responseObject);
  currentSaved = this.savedSource.asObservable();
  
  constructor() {
    this.responseObject.splice(0, 1);
  }

  changeMessage(name: any) {
    this.savedSource.next(name);
  }

  getRss(name: any) {
    this.responseObject.push(name);
    console.log('luu', name.title);
    return this.responseObject;
  }

  removeRss(checkItem: any) {
    for (let index = 0; index < this.responseObject.length; index++) {
      let savedItem = this.responseObject[index];
      if (savedItem.title === checkItem.title && savedItem.pubDate === checkItem.pubDate && savedItem.content === checkItem.content && savedItem.link === checkItem.link) {
        this.responseObject.splice(index, 1);
      }
    }
    console.log('khong luu', checkItem.title);
  }

  check(checkItem: any): boolean {
    let result = false;
    this.responseObject.forEach(savedItem => {
      if (savedItem.title === checkItem.title && savedItem.pubDate === checkItem.pubDate && savedItem.content === checkItem.content && savedItem.link === checkItem.link) {
        result = true;
      }
    });
    return result;
  }
}
