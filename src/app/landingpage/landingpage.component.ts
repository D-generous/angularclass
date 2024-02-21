import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';

// import { MatDialog } from '@angular/material/dialog';
// import { MyModalComponent } from './../my-modal/my-modal.component';



interface contactinterface{
  firstname: string,
  lastname: string,
  phonenumber: string,
  address: string,
  gender: string,
  email: string,
  // newfirst:string

}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})



export class LandingpageComponent {
  
  constructor(public activated:ActivatedRoute, public routes:Router){}
  

  public first_name = ''
  public email= ''
  public phone_number= ''
  public address= ''
  public last_name= ''
  public gender= ''

  public styles = 'form-control my-2 col-3'

  public contactArray: contactinterface[]=[

  ]

  ngOnInit(){
    if (localStorage['contacts']) {
      this.contactArray= JSON.parse(localStorage['contacts'])
      // console.log(this.contactArray);
      
      
    }
  }

  addContent(){
    let contactObj = {
      firstname: this.first_name,
      lastname: this.last_name,
      phonenumber : this.phone_number,
      address: this.address,
      gender: this.gender,
      email: this.email,
      // newfirst: this.newFirstname
    }

    this.contactArray.push(contactObj)
    console.log(this.contactArray);
    localStorage.setItem("contacts", JSON.stringify(this.contactArray))
    
    
  }



  del(i:number){
    this.contactArray = this.contactArray.filter((contacts, item)=> item !== i)
    localStorage.setItem("contacts", JSON.stringify(this.contactArray))

    console.log(i);
    

  }
  


  viewMe(i:number){
    console.log(i);
    this.routes.navigate(['dashboard/'+ i])
    
  }
  public newFirstname:any = ''
  public newLastname:any = ''
  public newPhoneNumber:any = ''
  public newAddress:any = ''
  public newMail:any = ''
  public newGender:any = ''
  public newId:any = ''



  editDetails(index:number){

    let newContactObj = {
      firstname: this.newFirstname,
      lastname: this.newLastname,
      phonenumber : this.newPhoneNumber,
      address: this.newAddress,
      gender: this.newGender,
      email: this.newMail,
      // newfirst: this.newFirstname
    }
    let currentuser = this.contactArray.find((student, index)=>{

      this.contactArray.splice(index, 1, newContactObj)
    })
    // if (currentuser) {
    //   console.log(currentuser);
    // }
    // else{
    //   this.message = 'User not found'
    // }

    // this.contactArray.push(newContactObj)
    // console.log(this.contactArray);
    // localStorage.setItem("contacts", JSON.stringify(this.contactArray))

    
    // console.log(i);
    // console.log(this.newFirstname);

    // console.log(this.newId);
    
    // console.log(this.contactArray);
    

    

  }


  // openModal(): void {
  //   const dialogRef = this.dialog.open(MyModalComponent, {
  //     width: '400px', // Set the width of your modal
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The modal was closed');
  //   });
  // }



}





