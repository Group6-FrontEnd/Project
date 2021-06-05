import { Component, OnInit, Input } from '@angular/core';
import { Rss2jsonService } from '../../services/rss2json/rss2json.service';
import { ResponseObject } from '../../services/rss2json/responseObject';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'appNew-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  view = 'Card';
  sort = 'Date';
  rss_url = 'https://vnexpress.net/rss/thoi-su.rss';

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
    this.rss2jsonService.getJson(this.rss_url).subscribe(content => {
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

  constructor(private rss2jsonService: Rss2jsonService) { }

  ngOnInit(): void {
  }

}
