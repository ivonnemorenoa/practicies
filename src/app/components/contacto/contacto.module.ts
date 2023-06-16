import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
   exports: [
    ContactoComponent
  ]
})
export class ContactoModule { }
