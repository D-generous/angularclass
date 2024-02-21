import { Component } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventpareent',
  standalone: true,
  imports: [EventchildComponent,FormsModule],
  templateUrl: './eventpareent.component.html',
  styleUrl: './eventpareent.component.css'
})
export class EventpareentComponent {

  public text=''
  public newtext = ''
  public data=''

  send(){
this.newtext=this.text
console.log(this.newtext);

  }

  receiveresponse(data:any){
    this.data = data
    console.log(data);
    

  }
}
