import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  selectedItem$ = new BehaviorSubject<string>('');

  setSelectedItem(key: string) {
    this.selectedItem$.next(key);
  }
}
