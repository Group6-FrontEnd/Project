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
        { name: 'Thời sự', link: 'home-detail/thoi-su', icon: '', url: 'https://vnexpress.net/rss/thoi-su.rss' },
        { name: 'Khoa học', link: 'home-detail/khoa-hoc', icon: '', url: 'https://vnexpress.net/rss/khoa-hoc.rss' },
        { name: 'Kinh doanh', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/kinh-doanh.rss' },
        { name: 'Giải trí', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/giai-tri.rss' },
        { name: 'Thể thao', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/the-thao.rss' },
        { name: 'Pháp luật', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/phap-luat.rss' },
        { name: 'Giáo dục', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/giao-duc.rss' },
        { name: 'Sức khỏe', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/suc-khoe.rss' },
        { name: 'Đời sống', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/gia-dinh.rss' },
        { name: 'Du lịch', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/du-lich.rss' },
        { name: 'Thế giới', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/the-gioi.rss' },
        { name: 'Số hóa', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/so-hoa.rss' },
        { name: 'Xe', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/oto-xe-may.rss' },
        { name: 'Cộng đồng', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/y-kien.rss' },
        { name: 'Tâm sự', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/tam-su.rss' },
        { name: 'Cười', link: 'home-detail', icon: '', url: 'https://vnexpress.net/rss/cuoi.rss' },
      ]
    },
    {
      name: 'Tin đã lưu', link: 'saved-news', icon: 'bookmark_border',
      children: [
        { name: '', link: '', icon: '' }
      ]
    },
    {
      name: 'Lịch sử', link: 'history', icon: 'update',
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