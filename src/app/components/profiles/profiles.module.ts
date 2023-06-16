import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ContactoModule } from '../contacto/contacto.module';
import { AsignaturaModule } from '../asignatura/asignatura.module';
import { RouterModule } from '@angular/router';
import { AsignaturaComponent } from '../asignatura/asignatura.component';



@NgModule({
  declarations: [
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContactoModule,
    AsignaturaModule,
  ],
  exports: [
    ProfilesComponent
  ]
})
export class ProfilesModule { }
