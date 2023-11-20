import { Component } from '@angular/core';
import { menuConfig, MenuItem } from '../menu-config';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuConfig: MenuItem[] = menuConfig;
  selectedItem: MenuItem | null = null;
  subMenuShown: boolean = false;

  constructor(private menuService: MenuService) {}

  setSelectedItem(item: MenuItem) {
    this.selectedItem = item;
    this.subMenuShown = !!item.children.length;
    if (!item.children.length) {
      this.emitItemKey(item.key);
    }
  }

  setSelectedKey(key: string) {
    this.emitItemKey(key);
    this.subMenuShown = false;
  }

  emitItemKey(key: string) {
    this.menuService.setSelectedItem(key);
  }
}
