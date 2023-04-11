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

  public alumnos: Profile [] = [
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

  public kids: Profile [] = [
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


  public incrementar (): void{
    this.contador=this.contador+1;
    //this.contador++;
    
  }


  public colorear (): void{

    // this.active = !this.active;

    if(this.active){
      this.active=false;

    }else {
      this.active=true;
    }


  }


   // Create a function comparative of two dates in the current year and return a number
  // 1 if the first date is greater than the second date


  public compararFechas (fecha1:Date, fecha2:Date): number{
    let fecha1Year = new Date(fecha1.getFullYear(), fecha1.getMonth(), fecha1.getDate());
    let fecha2Year = new Date(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate());

    if(fecha1Year > fecha2Year){
      return 1;
    }else if(fecha1Year < fecha2Year){
      return -1;
    }else{
      return 0;
    }
  }

  // Create a function that receives a date and returns a value as excel number format

  public excelDateFormat (date:Date): number{
    let excelDate = date.getTime();
    let excelDateNumber = (excelDate / (1000 * 60 * 60 * 24)) + 25569 + 1;
    return excelDateNumber;
  }
  
  




}

