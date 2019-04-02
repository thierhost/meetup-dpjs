import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeetupListComponent } from './meetup-list/meetup-list.component';
import { MeetupComponent } from './meetup/meetup.component';
import { FooterComponent } from './footer/footer.component';
import { MeetupDetailComponent } from './meetup-detail/meetup-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeetupListComponent,
    MeetupComponent,
    FooterComponent,
    MeetupDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
