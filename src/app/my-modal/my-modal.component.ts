import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.css'
})
export class MyModalComponent {
  constructor(public dialogRef: MatDialogRef<MyModalComponent>) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
