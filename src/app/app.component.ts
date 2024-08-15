import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = 'JAO';
  userData = {
    email: 'roberto@123',
    role: 'admin',
  }

  title = 'workshop-front';
}
