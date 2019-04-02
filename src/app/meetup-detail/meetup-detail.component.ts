import { Component, OnInit, } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {meetups} from '../meetups';

@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css']
})
export class MeetupDetailComponent implements OnInit {
  meetup = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.meetup = meetups.filter(elt => elt.id == id)[0];
  }

}
