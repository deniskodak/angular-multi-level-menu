import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MenuItem } from '../menu-config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnChanges {
  @Input() config: MenuItem[] = [];
  @Output() itemSelect = new EventEmitter<string>();
  selectedItem: MenuItem | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.selectedItem = null;
    }
  }

  handleSelectItem(item: MenuItem) {
    this.selectedItem = item;
    if (!item.children.length) {
      this.itemSelect.emit(item.key);
    }
  }

  handleNestedSelectItem(itemKey: string) {
    this.itemSelect.emit(itemKey);
  }

  identify(index: number, item: MenuItem) {
    return item.key;
  }
}
