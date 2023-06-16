import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoModule } from './components/contacto/contacto.module';
import { ProfilesModule } from './components/profiles/profiles.module';
import { MediaEventsComponent } from './media-events/media-events.component';
import { AsignaturaModule } from './components/asignatura/asignatura.module';

@NgModule({
  declarations: [
    AppComponent,
    MediaEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfilesModule,
    ContactoModule,
    AsignaturaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
