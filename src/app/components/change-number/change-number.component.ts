import { Component } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {

  handleClick() {
    console.log("Mudou o número");
  }
}
