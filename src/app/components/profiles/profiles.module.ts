import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { AvatarModule } from '../avatar/avatar.module';
import { ProfileResumeModule } from '../profile-resume/profile-resume.module';



@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    ProfileResumeModule,
  ],
  exports: [
    ProfilesComponent
  ]
})
export class ProfilesModule { }
