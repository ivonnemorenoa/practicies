import { Component } from '@angular/core';
import { Profile } from './interfaces/profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qa-practicies';
  contador:number=0;
  active:boolean=false;
  

  public minis: Profile [] = [
    {
      url:'https://rockstudios.com.au/wp-content/uploads/2020/12/lilliandrewsstudiopt-11.jpg',
      id: '1',
      name: 'Juan',
      age: 20,
      description: 'Estudiante de Ingeniería de Sistemas',
      talents: ['Cocinar', 'Dibujar', 'Programar']
    },
    {
      url:'https://rockstudios.com.au/wp-content/uploads/2020/12/lilliandrewsstudiopt-11.jpg',
      id: '2',
      name: 'Victoria',
      age: 5,
      description: 'Estudiante de Ingeniería de Sistemas',
      talents: ['Cocinar', 'Dibujar', 'Programar']
    }
  ];




  

















  
  




}

