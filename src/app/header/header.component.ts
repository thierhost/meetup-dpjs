import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {SwitcherService} from '../switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService,
              private switcherService: SwitcherService) { }

  ngOnInit() {
  }

  search = (value) => {
    this.searchService.filter(value);
  };

  switch = () => {
    this.switcherService.theme = this.switcherService.theme === 'light' ? 'dark' : 'light';
  }
}
