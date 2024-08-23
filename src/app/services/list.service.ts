import { Injectable } from '@angular/core';

import { Usuarios } from '../Usuarios';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static remove(users: Usuarios[], usuario: Usuarios) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  remove(users: Usuarios[], usuarios: Usuarios) {
    return users.filter((u) => usuarios.name !== u.name);
  }

  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl)
  }
}
