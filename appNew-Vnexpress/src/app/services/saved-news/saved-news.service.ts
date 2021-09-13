import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedNewsService {

  public responseObjectSave =
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

  private savedSource = new BehaviorSubject(this.responseObjectSave);
  currentSaved = this.savedSource.asObservable();
  
  constructor() {
    this.responseObjectSave.splice(0, 1);
  }

  changeMessage(name: any) {
    this.savedSource.next(name);
  }

  getRss(name: any) {
    this.responseObjectSave.push(name);
    console.log('luu', name.title);
    return this.responseObjectSave;
  }

  removeRss(checkItem: any) {
    for (let index = 0; index < this.responseObjectSave.length; index++) {
      let savedItem = this.responseObjectSave[index];
      if (savedItem.title === checkItem.title && savedItem.pubDate === checkItem.pubDate && savedItem.content === checkItem.content && savedItem.link === checkItem.link) {
        this.responseObjectSave.splice(index, 1);
      }
    }
    console.log('khong luu', checkItem.title);
  }

  check(checkItem: any): boolean {
    let result = false;
    this.responseObjectSave.forEach(savedItem => {
      if (savedItem.title === checkItem.title && savedItem.pubDate === checkItem.pubDate && savedItem.content === checkItem.content && savedItem.link === checkItem.link) {
        result = true;
      }
    });
    return result;
  }
}
