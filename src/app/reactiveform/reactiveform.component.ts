import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  public firstname:any=''
  constructor(public formbuilder:FormBuilder){}
  public formone = this.formbuilder.group({
    firstname:['', Validators.required],
    email:['', [Validators.email]],
    password:[''],

  })
  ngOnInit(){
    console.log(this.formone);
   this.firstname=this.formone.value['email']

    this.formone.controls['firstname'].setValue('')
    
  }
}
