import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeetupListComponent} from './meetup-list/meetup-list.component';
import {MeetupDetailComponent} from './meetup-detail/meetup-detail.component';

const routes: Routes = [
  {path:'meetups', component: MeetupListComponent},
  {path:'meetups/:id', component: MeetupDetailComponent},
  {path:'', redirectTo:'/meetups', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
