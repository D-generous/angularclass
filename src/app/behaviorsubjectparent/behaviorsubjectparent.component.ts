import { Component } from '@angular/core';
import { BehaviorsubjectchildComponent } from '../behaviorsubjectchild/behaviorsubjectchild.component';
import { Behaviorsubjectchild2Component } from '../behaviorsubjectchild2/behaviorsubjectchild2.component';

@Component({
  selector: 'app-behaviorsubjectparent',
  standalone: true,
  imports: [BehaviorsubjectchildComponent, Behaviorsubjectchild2Component],
  templateUrl: './behaviorsubjectparent.component.html',
  styleUrl: './behaviorsubjectparent.component.css'
})
export class BehaviorsubjectparentComponent {

}
