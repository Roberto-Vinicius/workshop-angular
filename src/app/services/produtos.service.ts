import { Injectable } from '@angular/core';
import { Produtos } from '../Produtos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private productsUrl = "http://localhost:8080/products";

  constructor(private http: HttpClient) { }

  // Método para obter todos os produtos
  getAllProducts(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.productsUrl);
  }
}
