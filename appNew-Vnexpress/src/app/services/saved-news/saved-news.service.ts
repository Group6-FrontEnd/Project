import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedNewsService {

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
private savedSource = new BehaviorSubject(this.responseObject);
currentSaved = this.savedSource.asObservable();
constructor() { 
this.responseObject.splice(0,1);
}

changeMessage(name: any) {
this.savedSource.next(name);
}
getRss(name:any){
this.responseObject.push(name);
console.log('uuuuuuuuuuu',this.responseObject);
return  this.responseObject;

}
}
