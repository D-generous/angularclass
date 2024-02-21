import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor (public service:LandingpageserviceService){}
  public myInfo:any = ''
  ngOnInit(i:any){
    console.log(this.service.getStudents());
    this.myInfo = this.service.getStudents()

  }
  
  


}
