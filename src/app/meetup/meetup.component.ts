import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  @Input() meetup;
  constructor() { }

  ngOnInit() {
  }

}
