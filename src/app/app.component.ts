import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qa-practicies';
  contador:number=0;
  active:boolean=false;
  


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
}

