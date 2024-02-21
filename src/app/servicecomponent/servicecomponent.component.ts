import { Component, OnInit } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';
import { CommonModule } from '@angular/common';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-servicecomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
  

  
  // data: string[]
  
  constructor(public service:LandingpageserviceService){}
  
  public data:any = ''
  public user = "Oyin"
  ngOnInit(i:number){
    // console.log(this.service.returnItem());
    this.user = this.service.returnItem()
    // console.log(this.user);
    // console.log(this.service.returnStorage());

    this.service.returnStorage().subscribe((result)=>{
      this.data = result 
      console.log(this.data);
      
    })
    
    
    
  }

}
