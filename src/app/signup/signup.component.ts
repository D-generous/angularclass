import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { routes } from '../app.routes';

interface studentinterface{
  firstname: string,
   lastname:string,
   age:string,
   email:string,
   password:string,
   address:string,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public routes:Router){}

  public firstname= '';
  public lastname= '';
  public age= '';
  public email= '';
  public password= '';
  public address= '';
  public message = '';
  public studentArray:studentinterface[]=[]
  ngOnInit(){
    if (localStorage['newstudents']) {
      // this.studentArray= JSON.parse(localStorage['newstudents'])
    this.studentArray= JSON.parse(localStorage.getItem('newstudents')!)
    }
  }
  signup(){
    let studentObj={
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      email: this.email,
      address: this.address,
      password: this.password 
    }
    this.studentArray.push(studentObj)
    localStorage.setItem('newstudents', JSON.stringify(this.studentArray))
    if (this.studentArray) {
      this.routes.navigate(['/signin'])
    }
    else{
      this.message= "Registration not Successful"
    }
  }

}
