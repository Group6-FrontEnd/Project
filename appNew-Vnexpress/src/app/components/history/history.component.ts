import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { ResponseObject } from 'src/app/models/responseObject';
import { Rss2jsonService } from 'src/app/services/rss2json/rss2json.service';
import { SavedNewsService } from 'src/app/services/saved-news/saved-news.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  view = 'Card';
  sortBy = 'Date';
  histories = [{
    id:'',
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
  responseObject: ResponseObject = {
    status: '',
    feed: {
      url: '',
      title: '',
      link: '',
      author: '',
      description: '',
      image: '',
    },
    items: [
      {
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
      }
    ]
  };

  responseObjectData: ResponseObject = {
    status: '',
    feed: {
      url: '',
      title: '',
      link: '',
      author: '',
      description: '',
      image: '',
    },
    items: [
      {
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
      }
    ]
  };
  constructor(private historyService: HistoryService) {

  }
  ngOnInit(): void {
    this.histories.splice(0, 1);
    this.historyService.currentHistory.subscribe(name => {
      this.histories = name;
    });
  }

  sort(target: string): void {
    if (target === 'Title') {
      this.histories = this.histories.sort((item1, item2) => item1.title.localeCompare(item2.title));
    } else {
      this.histories = this.histories.sort((item1, item2) => item2.pubDate.localeCompare(item1.pubDate));
    }
  }
  clear(id: any) {
    if(confirm("bạn có chắc chắn muốn xóa không")){
      console.log('Xóa: ' + id.title);
      const index: number = this.histories.indexOf(id);
      const indexData: number = this.responseObjectData.items.indexOf(id);
      if (index !== -1) {
        this.histories.splice(index, 1);
        this.responseObjectData.items.splice(indexData, 1);
      }
    }
  }
}
