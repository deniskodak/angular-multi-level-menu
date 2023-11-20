import { Component, Input } from '@angular/core';
import { MenuItem } from '../../menu-config';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() item: MenuItem | null = null;
  @Input() active: boolean = false;
}

