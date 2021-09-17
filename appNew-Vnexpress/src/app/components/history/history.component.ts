import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';

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
}
