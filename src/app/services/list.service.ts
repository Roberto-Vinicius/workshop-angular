import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static remove(animals: Animal[], animal: Animal) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
  
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
