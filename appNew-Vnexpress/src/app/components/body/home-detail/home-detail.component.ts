import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseObject } from 'src/app/models/responseObject';
import { HistoryService } from 'src/app/services/history/history.service';
import { Rss2jsonService } from 'src/app/services/rss2json/rss2json.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  view = 'Card';
  sort = 'Date';
  color: string = 'black';
  link_rss = '';

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

  getJson(): void {
    this.rss2jsonService.getJson(this.link_rss).subscribe(content => {
      this.responseObject = content;
      this.responseObject.items.forEach(item => {
        item.content = this.getContent(item.content);
      });
      console.log(this.responseObject.items);
    })
  }

  getContent(origin: string): string {
    return origin.substring(origin.lastIndexOf('>') + 1);
  }

  constructor(private rss2jsonService: Rss2jsonService,
    private router: Router,
    private historyService: HistoryService
  ) {
    console.log('na:', this.link_rss);
    const navigation = this.router.getCurrentNavigation();
    this.link_rss = navigation?.extras.state as any;
    console.log('rssUrl:', this.link_rss);
  }

  ngOnInit(): void {
    this.getJson();
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
}
