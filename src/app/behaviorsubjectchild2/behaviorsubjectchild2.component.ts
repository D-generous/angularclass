import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviorsubjectchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviorsubjectchild2.component.html',
  styleUrl: './behaviorsubjectchild2.component.css'
})
export class Behaviorsubjectchild2Component {
  constructor(public behavior:BehaviorService){}
  public behavior_obj:any={}
  ngOnInit(){
    // console.log(this.behavior.behavior);
    this.behavior.behavior.subscribe(data=>{
      // console.log(data);
      this.behavior_obj= data
      console.log(this.behavior_obj);
      
      
    })
    
  }
  public firstname:any=''

  changelist(list:any){
    // console.log(list);
    this.behavior.behavior.next(list)
    

  }

}
