import { Injectable } from '@angular/core';

import { Usuarios } from '../Usuarios';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userUrl = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  // Método para remover um usuário da lista
  remove(users: Usuarios[], usuario: Usuarios): Usuarios[] {
    return users.filter((u) => usuario.name !== u.name);
  }

  // Método para obter todos os usuários
  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.userUrl);
  }
}
