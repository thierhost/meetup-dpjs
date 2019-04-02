import { Component } from '@angular/core';
import {SwitcherService} from './switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private switcherService: SwitcherService) {

  }

}
