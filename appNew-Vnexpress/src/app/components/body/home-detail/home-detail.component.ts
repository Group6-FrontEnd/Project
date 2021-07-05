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
  color: string = 'black';
  color_save: string = 'black';
  count = 0;
  link_rss = '';
  loadNumber = 1;

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
        item.content = this.getContent(item.content);
      });

      this.responseObject.status = this.responseObjectData.status;
      this.responseObject.feed = this.responseObjectData.feed;
      this.showMore(0, 9);

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
      if (!this.responseObject.items.includes(this.responseObjectData.items[i])) {
        this.responseObject.items[counter] = this.responseObjectData.items[i];
        counter++;
      }
      i++;
    }
    console.log(this.responseObject.items);
    this.sort(this.sortBy);
  }

  constructor(private rss2jsonService: Rss2jsonService,
    private router: Router,
    private historyService: HistoryService,
    private savedService: SavedNewsService
  ) {

    this.loadRss();
  }


  ngOnInit(): void {
    this.getJson();

  }
  loadRss() {
    const navigation = this.router.getCurrentNavigation();
    this.link_rss = navigation?.extras.state as any;
    console.log('rssUrl:', this.link_rss);
  }

  loadMore(): void {
    this.showMore(9 * this.loadNumber, 9 + 9 * this.loadNumber);
    this.loadNumber++;
  }

  sort(target:string): void {
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
    if (index !== -1) {
      this.responseObject.items.splice(index, 1);
    }
  }

  read(id: any) {
    console.log('Đọc: ' + id.title);
    this.historyService.getRss(id);
  }
  save(id: any) {
    console.log('Lưu: ' + id.title);
    this.count++;
    if (this.count % 2 !== 0) {
      this.savedService.getRss(id);
      this.color_save = "red!important";
    } else {
      this.color_save = "black!important";
    }
  }
}
