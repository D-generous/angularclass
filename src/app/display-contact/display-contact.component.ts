import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface contactinterface{
  firstname: string,
  lastname: string,
  phonenumber: string,
  address: string,
  gender: string,
  email: string

}

@Component({
  selector: 'app-display-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-contact.component.html',
  styleUrl: './display-contact.component.css'
})
export class DisplayContactComponent {
  constructor(public activated:ActivatedRoute){}
  public index = 0
  public retrieveStorage:any = []
  
  ngOnInit(){
    this.retrieveStorage = JSON.parse(localStorage['contacts'])
    this.index = this.activated.snapshot.params['i']
    // if (localStorage['contacts']) {
    //   this.retrieveStorage= JSON.parse(localStorage['contacts'])
    //   console.log(this.retrieveStorage[this.index].firstname);
    // }
    this.retrieveStorage= this.retrieveStorage[this.index]
    // console.log(this.retrieveStorage);
    
    
    // // console.log(this.activated);
    // console.log(this.index);
    
    
    
  }



}
