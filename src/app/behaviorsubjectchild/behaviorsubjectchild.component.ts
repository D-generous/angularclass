import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';

@Component({
  selector: 'app-behaviorsubjectchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorsubjectchild.component.html',
  styleUrl: './behaviorsubjectchild.component.css'
})
export class BehaviorsubjectchildComponent {
  constructor(public behavior:BehaviorService){}
  public behavior_array: any = [
    {
      firstname: 'Elon',
      lastname: 'Musk',
      age: 30,
      email: 'musk@gmail.com'
    },
    {
      firstname: 'Captain',
      lastname: 'College',
      age: 54,
      email: 'captain@gmail.com'
    },
  ]

  sendlist(list:any){
    // console.log(list);
    this.behavior.behavior.next(list)
    
  }
}
