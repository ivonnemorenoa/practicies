import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarModule } from './components/avatar/avatar.module';
import { ProfilesModule } from './components/profiles/profiles.module';
import { MediaEventsComponent } from './media-events/media-events.component';
import { ProfileResumeModule } from './components/profile-resume/profile-resume.module';

@NgModule({
  declarations: [
    AppComponent,
    MediaEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    ProfilesModule,
    ProfileResumeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
