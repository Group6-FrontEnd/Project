import { Component, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/responseObject';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  view = 'Card';
  sort = 'Date';
  histories = [{
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
  constructor(private historyService: HistoryService) {

  }
  ngOnInit(): void {
    this.histories.splice(0, 1);
    this.historyService.currentHistory.subscribe(name => {
      this.histories = name;
    });
  }
}
