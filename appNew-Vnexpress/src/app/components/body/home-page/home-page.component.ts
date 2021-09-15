import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ResponseObject } from 'src/app/models/responseObject';
import { Rss2jsonService } from 'src/app/services/rss2json/rss2json.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
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
  
  link_url = ['https://vnexpress.net/rss/tin-moi-nhat.rss', 'https://vnexpress.net/rss/khoa-hoc.rss']

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

  getJson(url: string): void {
    this.rss2jsonService.getJson(url).subscribe(content => {
      this.responseObjectLatestNews = content;
      this.responseObjectLatestNews.items.forEach(item => {
        item.content = this.getContent(item.content);
      });
      console.log(this.responseObjectLatestNews);
    });
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

  getContent(origin: string): string {
    return origin.substring(origin.lastIndexOf('>') + 1);
  }

  constructor(private rss2jsonService: Rss2jsonService) { }

  ngOnInit(): void {
    this.getJson(this.link_url[0]);
    this.getJson1(this.link_url[1]);
  }
}
