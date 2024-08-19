import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static remove(animals: Animal[], animal: Animal) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
