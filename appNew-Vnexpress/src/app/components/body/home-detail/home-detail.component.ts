import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseObject } from 'src/app/models/responseObject';
import { HistoryService } from 'src/app/services/history/history.service';
import { Rss2jsonService } from 'src/app/services/rss2json/rss2json.service';
import { SavedNewsService } from 'src/app/services/saved-news/saved-news.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  view = 'Card';
  sortBy = 'Date';
  link_rss = '';
  loadNumber = 0;

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

  getJson(): void {
    this.rss2jsonService.getJson(this.link_rss).subscribe(content => {
      this.responseObjectData = content;
      this.responseObjectData.items.forEach(item => {
        item.description = '';
        item.content = this.getContent(item.content);
      });

      this.sort(this.sortBy);

      this.responseObject.items.splice(0);

      this.responseObject.status = this.responseObjectData.status;
      this.responseObject.feed = this.responseObjectData.feed;
      this.loadMore();

      console.log(this.responseObjectData.items);
    })
  }

  getContent(origin: string): string {
    return origin.substring(origin.lastIndexOf('>') + 1);
  }

  showMore(start: number, count: number) {
    let counter = start;
    let i = 0;
    while (counter < count && i <= 27) {
      if (this.responseObjectData.items[i] !== undefined && !this.responseObject.items.includes(this.responseObjectData.items[i])) {
        this.responseObject.items[counter] = this.responseObjectData.items[i];
        counter++;
      }
      i++;
    }

    this.sort(this.sortBy);
    this.checkReadNews();
    this.checkSavedNews();

    console.log(this.responseObject.items);
  }

  constructor(private rss2jsonService: Rss2jsonService,
    private router: Router,
    private historyService: HistoryService,
    private savedService: SavedNewsService
  ) {
  }



  ngOnInit(): void {
    if (this.link_rss == undefined || this.link_rss == '') {
      const url:string = this.router.url;
      this.link_rss = 'https://vnexpress.net/rss' + url.substring(url.lastIndexOf('/'));
    }
    this.getJson();
    console.log("page-detail init")
  }


  loadMore(): void {
    this.showMore(this.responseObject.items.length, 9 + 9 * this.loadNumber);
    if (this.loadNumber < 3) {
      this.loadNumber++;
    }
  }

  sort(target: string): void {
    if (target === 'Title') {
      this.responseObject.items = this.responseObject.items.sort((item1, item2) => item1.title.localeCompare(item2.title));
      this.responseObjectData.items = this.responseObjectData.items.sort((item1, item2) => item1.title.localeCompare(item2.title));
    } else {
      this.responseObject.items = this.responseObject.items.sort((item1, item2) => item2.pubDate.localeCompare(item1.pubDate));
      this.responseObjectData.items = this.responseObjectData.items.sort((item1, item2) => item2.pubDate.localeCompare(item1.pubDate));
    }
  }

  clear(id: any) {
    console.log('Xóa: ' + id.title);
    const index: number = this.responseObject.items.indexOf(id);
    const indexData: number = this.responseObjectData.items.indexOf(id);
    if (index !== -1) {
      this.responseObject.items.splice(index, 1);
      this.responseObjectData.items.splice(indexData, 1);
    }
  }

  read(id: any) {
    console.log('Đọc: ' + id.title);
    let index = this.responseObject.items.indexOf(id);
    let indexData = this.responseObjectData.items.indexOf(id);

    if (index != -1) {
      if (id.description.includes('read')) {
        this.historyService.removeRss(id);
        this.responseObject.items[index].description.replace("read", "");
        this.responseObjectData.items[indexData].description.replace("read", "");
      } else {
        this.responseObject.items[index].description += ' read';
        this.responseObjectData.items[indexData].description += ' read';
        this.historyService.getRss(id);
      }
    }
  }

  checkReadNews() {
    this.responseObject.items.forEach(item => {
      if (this.historyService.check(item)) {
        item.description += 'read';
      }
    })
    this.responseObjectData.items.forEach(item => {
      if (this.historyService.check(item)) {
        item.description += 'read';
      }
    })
  }

  save(id: any) {
    let index = this.responseObject.items.indexOf(id);
    let indexData = this.responseObjectData.items.indexOf(id);

    if (index != -1) {
      if (id.description.includes('saved')) {
        this.savedService.removeRss(id);
        this.responseObject.items[index].description.replace("saved", "");
        this.responseObjectData.items[indexData].description.replace("saved", "");
      } else {
        this.responseObject.items[index].description += ' saved';
        this.responseObjectData.items[indexData].description += ' saved';
        this.savedService.getRss(id);
      }
    }
  }

  checkSavedNews() {
    this.responseObject.items.forEach(item => {
      if (this.savedService.check(item)) {
        item.description += 'saved';
      }
    })
    this.responseObjectData.items.forEach(item => {
      if (this.savedService.check(item)) {
        item.description += 'saved';
      }
    })
  }
}
