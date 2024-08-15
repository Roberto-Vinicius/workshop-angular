import { Component } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  
  animals: Animal[] = [
    { name: 'Lion', type: 'Mammal', age: 1 },
    { name: 'Eagle', type: 'Bird', age: 5 },
    { name: 'Shark', type: 'Fish', age: 3 },
    { name: 'Elephant', type: 'Mammal', age: 5 },
    { name: 'Snake', type: 'Reptile', age: 2 },
  ];

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
