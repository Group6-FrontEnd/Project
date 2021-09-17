import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { ResponseObject } from 'src/app/models/responseObject';
import { AccountService } from 'src/app/services/account/account.service';
import { Rss2jsonService } from 'src/app/services/rss2json/rss2json.service';
import { HistoryService } from 'src/app/services/history/history.service';
import { SavedNewsService } from 'src/app/services/saved-news/saved-news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  countRead = 1;
  view = 'Card';
  sortBy = 'Date';
  link_rss = '';
  loadNumber = 0;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    autoHeight: true,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 550,
    margin:20,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: false
  }
  
  link_url = ['https://vnexpress.net/rss/tin-moi-nhat.rss', 'https://vnexpress.net/rss/tin-xem-nhieu.rss']

  responseObjectLatestNews: ResponseObject = {
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

  getJson(url: string): void {
    this.rss2jsonService.getJson(url).subscribe(content => {
      this.responseObjectLatestNews = content;
      this.responseObjectLatestNews.items.forEach(item => {
        item.content = this.getContent(item.content);
      });
      console.log(this.responseObjectLatestNews);
    });
  }
constructor(private rss2jsonService: Rss2jsonService,
    private router: Router,
    private historyService: HistoryService,
    private savedService: SavedNewsService,
    private accountService: AccountService
  ) {
  }
  getJson1(url: string): void {
    this.rss2jsonService.getJson(url).subscribe(content => {
      this.responseObject = content;
      this.responseObject.items.forEach(item => {
        item.content = this.getContent(item.content);
      });
      console.log(this.responseObject);
    });
  }
  read(id: any) {
    console.log('Đọc: ' + id.title);
    let index = this.responseObject.items.indexOf(id);
    let indexData = this.responseObjectData.items.indexOf(id);

    if (index != -1) {
      this.countRead++;

      if (id.description.includes('read')) {
        this.historyService.histories[0].id = this.countRead.toString();
        this.savedService.count= this.countRead;
      } else {     
        this.responseObject.items[index].description += ' read';
        this.responseObjectData.items[indexData].description += ' read';
        this.historyService.getRss(id);
      }
    }
  }
  getContent(origin: string): string {
    return origin.substring(origin.lastIndexOf('>') + 1);
  }
  ngOnInit(): void {
    this.getJson(this.link_url[0]);
    this.getJson1(this.link_url[1]);
  }
}
