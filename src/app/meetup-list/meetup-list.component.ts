import { Component, OnInit } from '@angular/core';
import {meetups} from '../meetups';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent implements OnInit {

  meetups = meetups;
  displayedMeetups;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.displayedMeetups = meetups;
    this.searchService.search.subscribe(value => {
      if(value == "") {
        this.displayedMeetups = meetups;
      } else {
        this.displayedMeetups =
          meetups
          .filter(elt => elt.name.toLowerCase().includes(value.toLowerCase()))
      }
      })
  }

}
