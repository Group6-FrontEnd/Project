import { Component, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/responseObject';
import { SavedNewsService } from 'src/app/services/saved-news/saved-news.service';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.scss']
})
export class SavedNewsComponent implements OnInit {

  view = 'Card';
  sort = 'Date';
  color: string = 'black';
  saves = [{
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

  constructor(private savedService: SavedNewsService) {
  }
  ngOnInit(): void {
    this.saves.splice(0,1);
    this.savedService.currentSaved.subscribe(name => {
      this.saves=name;
    });
  }

  clear(id: any) {
    console.log('Xóa: ' + id.title);
    const index: number = this.saves.indexOf(id);
    if (index !== -1) {
      this.saves.splice(index, 1);
    }
  }
}
