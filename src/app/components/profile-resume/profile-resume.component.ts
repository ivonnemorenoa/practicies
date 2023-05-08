import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-resume',
  templateUrl: './profile-resume.component.html',
  styleUrls: ['./profile-resume.component.css']
})
export class ProfileResumeComponent {

}

export class ProfileResume {
  public photo: string;
  public name: Name;
  public age: number;
  public talents: string[];

  constructor(photo: string, name: Name, age: number, talents: string[]) {
    this.photo = photo;
    this.name = name;
    this.age = age;
    this.talents = talents;
  }
}

export class Name {

  //Atributos
  public firstName: String;
  public middleName: String;
  public lastName: String;

  //Constructor
  constructor(first_name: String, middle_name:String, last_name:String ){
      this.firstName = first_name;
      this.middleName = middle_name;
      this.lastName = last_name;
  }
  

  //Métodos
  public getCompletname(){
      return this.firstName + " " + this.lastName;
  }
}
export class age {
  public age: number;
  

  constructor(age: number) {
    this.age = age;
  }
}
//public getCompleteage(){
  // return this.age  + " ";
//}

export class talents {
  public talents: string[];

  constructor(talents: string[]) {
    this.talents = talents;
  }
}
//public getCompletetalents(){
  //  return this.talents  + " ";
//}