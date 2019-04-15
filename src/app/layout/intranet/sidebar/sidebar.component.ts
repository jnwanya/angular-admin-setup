import { Component, OnInit } from '@angular/core';
import {RouteInfo} from './sidebar-metadata';
import {ADMIN_SIDEBAR} from './sidebar-routes-admin.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public verticalNavType: string;

  public menuTitleTheme: string;
  public dropDownIcon: string;
  public subItemIcon: string;

  public itemBorderStyle: string;
  public subItemBorder: boolean;
  public itemBorder: boolean;

  sideBarMenuList: Array<RouteInfo> = [];
  constructor() {
    this.menuTitleTheme = 'theme1'; // theme1(default) theme10(dark)
    this.dropDownIcon = 'style3';
    this.subItemIcon = 'style7';
    this.itemBorderStyle = 'none';
    this.subItemBorder = true;
    this.itemBorder = true;
    this.verticalNavType = 'expanded';
  }

  ngOnInit() {
    this.sideBarMenuList = ADMIN_SIDEBAR.filter(menuItem => menuItem);
  }


  fireClick(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = e.target.parentNode.parentNode;
      if (parentEle.classList.contains('pcoded-trigger')) {
        const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < subEle.length; i++) {
          if (subEle[i].classList.contains('pcoded-trigger')) {
            subEle[i].classList.remove('pcoded-trigger');
          }
        }
      } else {
        e.target.click();
      }
    }
  }

  fireClickLeave(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = <HTMLElement>e.target.parentNode.parentNode;
      const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < subEle.length; i++) {
        if (subEle[i].classList.contains('pcoded-trigger')) {
          subEle[i].classList.remove('pcoded-trigger');
        }
      }
    }
  }

}
