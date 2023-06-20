import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as L from 'leaflet';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formulario = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
  });


  constructor() { }
  ngAfterViewInit() {

    const map: any = L.map('map').setView([25.6558881, -100.2644069], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const options: L.MarkerOptions = {
      icon: L.icon({
        iconSize: [40,40],
        iconUrl: './assets/map-icon.jpg',
      }),
    };
     

    L.marker([25.6558881, -100.2644069], options).addTo(map)
      // .bindPopup('Aquí estamos!.')
      // .openPopup();

  }
}
