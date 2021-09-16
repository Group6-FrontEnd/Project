import { Component, OnInit } from '@angular/core';
import { SavedNewsService } from 'src/app/services/saved-news/saved-news.service';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.scss']
})
export class SavedNewsComponent implements OnInit {

  view = 'Card';
  sortBy = 'Date';
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
    console.log('Luuuuuuu: ' +  this.saves);
  }

  clear(id: any) {
    console.log('Xóa: ' + id.title);
    const index: number = this.saves.indexOf(id);
    if (index !== -1) {
      this.saves.splice(index, 1);
    }
  }

  sort(target: string): void {
    if (target === 'Title') {
      this.saves = this.saves.sort((item1, item2) => item1.title.localeCompare(item2.title));
    } else {
      this.saves = this.saves.sort((item1, item2) => item2.pubDate.localeCompare(item1.pubDate));
    }
  }
}
