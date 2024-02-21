import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';


interface Objectname {
  firstname: string,
  lastname: string,
  age: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularClass';

  public firstname = 'Samuel'
  public lastname = 'Sunday'

  //typestript
  public age: string | number = 66
  public bool: boolean = false
  public address: string = "No 10, Ogbomosho, Oyo State, Nigeria"
  public email: string = "dgenafo@gmail.com"
  public colour: number = 90

  public firststyling = 'form-control pb-2 w-50 mx-auto'
  public secstyling = 'shadow-lg bg-secondary mx-auto'


  public obj1: Objectname = {
      firstname: "Alok",
      lastname: "Olakunle",
      age: 55
    }

    public array1:number[]= [32, 44, 11]
    public array2:string[]= ["Alok", "Sofiyat"]
    public array3:(number|string|boolean)[]= ["Alok", 32, 44, 11, true]
    public array4:Objectname[]= [
      {
        firstname: "Generous",
        lastname: "Ola",
        age: 15
      },
      {
        firstname: "Dgen",
        lastname: "Hola",
        age: 10
      }
    ]


    public special = true
    check(){
      this.special=!this.special
      // console.log(this.special);
      
    }

    checkindex(index:number){
      console.log(index);
      
    }


  ngOnInit() {
    this.age = 88
    this.firstname = 'Alok'
    this.bool = true
    console.log(this.lastname);
    console.log(this.array4[0].firstname);
    console.log(this.array4[1].firstname);
    console.log(this.array4[1]);

    for (let index = 0; index < this.array4.length; index++) {
      const element = this.array4[index];
      console.log(element);
      
      
      
    }

  }
}
