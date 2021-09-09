import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { mainContentAnimation } from './animations';
@Component({
  selector: 'appNew-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    mainContentAnimation(),
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  sidebarState!: string;

  constructor(
    private sidebarService: SidebarService,
  ) { }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$
      .subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
}