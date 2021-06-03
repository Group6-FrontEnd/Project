import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { sidebarAnimation, iconAnimation, labelAnimation } from 'src/app/animations';
import { Menu } from 'src/app/models/left-menu';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

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
  public menus: Menu[] = [
    {
      name: 'Trang chủ', link: '', icon: 'home',
      children: [
        { name: 'Thời sự', link: '', icon: '' },
        { name: 'Thế giới', link: '', icon: '' },
        { name: 'Kinh doanh', link: '', icon: '' },
        { name: 'Giải trí', link: '', icon: '' },
        { name: 'Thể thao', link: '', icon: '' },
        { name: 'Pháp luật', link: '', icon: '' },
        { name: 'Giáo dục', link: '', icon: '' },
        { name: 'Sức khỏe', link: '', icon: '' },
        { name: 'Đời sống', link: '', icon: '' },
        { name: 'Du lịch', link: '', icon: '' },
        { name: 'Khoa học', link: '', icon: '' },
        { name: 'Số hóa', link: '', icon: '' },
        { name: 'Xe', link: '', icon: '' },
        { name: 'Cộng đồng', link: '', icon: '' },
        { name: 'Tâm sự', link: '', icon: '' },
        { name: 'Cười', link: '', icon: '' },
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
      name: 'Cài đặt', link: '', icon: 'settings',
      children: [
        { name: '', link: '', icon: '' }
      ]
    },
  ]
  constructor(
    private sidebarService: SidebarService,
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
}