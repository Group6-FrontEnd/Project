import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';
import { Menu } from 'src/app/models/left-menu';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { NavigationExtras, Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

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
      name: 'Trang chủ', link: 'home-page', icon: 'home',
      children: [
        { name: 'Thời sự', link: 'thoi-su.rss' },
        { name: 'Khoa học', link: 'khoa-hoc.rss' },
        { name: 'Kinh doanh', link: 'kinh-doanh.rss' },
        { name: 'Giải trí', link: 'giai-tri.rss' },
        { name: 'Thể thao', link: 'the-thao.rss' },
        { name: 'Pháp luật', link: 'phap-luat.rss' },
        { name: 'Giáo dục', link: 'giao-duc.rss' },
        { name: 'Sức khỏe', link: 'suc-khoe.rss' },
        { name: 'Đời sống', link: 'gia-dinh.rss' },
        { name: 'Du lịch', link: 'du-lich.rss' },
        { name: 'Thế giới', link: 'the-gioi.rss' },
        { name: 'Số hóa', link: 'so-hoa.rss' },
        { name: 'Xe', link: 'oto-xe-may.rss' },
        { name: 'Cộng đồng', link: 'y-kien.rss' },
        { name: 'Tâm sự', link: 'tam-su.rss' },
        { name: 'Cười', link: 'cuoi.rss' },
      ]
    },
    {
      name: 'Tin đã lưu', link: 'saved-news', icon: 'bookmark_border',
      children: [
        { name: '', link: '' }
      ]
    },
    {
      name: 'Lịch sử', link: 'history', icon: 'update',
      children: [
        { name: '', link: '' }
      ]
    },
    {
      name: 'Cài đặt', link: 'settings', icon: 'settings',
      children: [
        { name: '', link: '' }
      ]
    },
  ]
  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private route: ActivatedRoute,
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
      this.router.navigate(['home-detail/' + name], { relativeTo: this.route });
      console.log('navigation', this.navigation);
    }
  }
}