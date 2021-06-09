import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';
import { Menu } from 'src/app/models/left-menu';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    sidebarAnimation(),
    iconAnimation(),
    labelAnimation()
  ]
})
export class SidebarComponent implements OnInit {
  treeControl = new NestedTreeControl<Menu>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Menu>();
  sidebarState!: string;
  url: string = '';
  navigation?: NavigationExtras;
  public menus: Menu[] = [
    {
      name: 'Trang chủ', link: 'home-page', icon: 'home', url: '',
      children: [
        { name: 'Thời sự', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/thoi-su.rss' },
        { name: 'Khoa học', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/khoa-hoc.rss' },
        { name: 'Kinh doanh', link: 'home-detail', icon: '', url: '' },
        { name: 'Giải trí', link: 'home-detail', icon: '', url: '' },
        { name: 'Thể thao', link: 'home-detail', icon: '', url: '' },
        { name: 'Pháp luật', link: 'home-detail', icon: '', url: '' },
        { name: 'Giáo dục', link: 'home-detail', icon: '', url: '' },
        { name: 'Sức khỏe', link: 'home-detail', icon: '', url: '' },
        { name: 'Đời sống', link: 'home-detail', icon: '', url: '' },
        { name: 'Du lịch', link: 'home-detail', icon: '', url: '' },
        { name: 'Thế giới', link: 'home-detail', icon: '', url: '' },
        { name: 'Số hóa', link: 'home-detail', icon: '', url: '' },
        { name: 'Xe', link: 'home-detail', icon: '', url: '' },
        { name: 'Cộng đồng', link: 'home-detail', icon: '', url: '' },
        { name: 'Tâm sự', link: 'home-detail', icon: '', url: '' },
        { name: 'Cười', link: 'home-detail', icon: '', url: '' },
      ]
    },
    {
      name: 'Tin đã đọc', link: '', icon: 'bookmark_border',
      children: [
        { name: '', link: '', icon: '' }
      ]
    },
    {
      name: 'Lịch sử', link: '', icon: 'update',
      children: [
        { name: '', link: '', icon: '' }
      ]
    },
    {
      name: 'Cài đặt', link: 'settings', icon: 'settings',
      children: [
        { name: '', link: '', icon: '' }
      ]
    },
  ]
  constructor(
    private sidebarService: SidebarService,
    private router: Router,
  ) {
    this.dataSource.data = this.menus;
  }

  ngOnInit() {
    this.sidebarService.sidebarStateObservable$.
      subscribe((newState: string) => {
        this.sidebarState = newState;
      });
  }
  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;
  linkUrl(name: any) {
    if (name) {
      this.navigation = { state: name }
      this.router.navigateByUrl('/home-detail/' + name.substring(26), this.navigation);
      console.log('navigation', this.navigation);
    }
  }
}