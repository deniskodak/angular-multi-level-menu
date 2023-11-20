import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedItem: string = '';
  selectedItem$: Observable<string>;

  constructor(menuService: MenuService) {
    this.selectedItem$ = menuService.selectedItem$;
  }
}
