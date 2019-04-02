import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  @Output() search = new EventEmitter();
  constructor() { }

  filter(key) {
    this.search.emit(key);
  }
}
