import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface studentinterface{
  firstname: string
   lastname:string
   age:string
   email:string
   password:string
   address:string
}
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  public email= ''
  public password= ''
  public message = ''
  constructor(public routes:Router){}
  public retrieveArray:studentinterface[] = []
  ngOnInit(){
    this.retrieveArray = JSON.parse(localStorage['newstudents'])
    console.log(this.retrieveArray);
  }
  signin(){
    let currentuser = this.retrieveArray.find((student, index)=>this.email==student.email && this.password==student.email)
    if (currentuser) {
      console.log(currentuser);
      console.log("User found");
      localStorage.setItem('currentuser',JSON.stringify(currentuser))
      this.routes.navigate(['/dashboard']) 
    }else{
      this.message = 'User not found'
    }
    

  }
}
