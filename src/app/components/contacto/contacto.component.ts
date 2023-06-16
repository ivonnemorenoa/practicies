import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  
  constructor() {} 

  formulario = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    number : new FormControl('', Validators.required), 
    comments : new FormControl('', Validators.required),
  });
}
