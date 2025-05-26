import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly apiUrl = "http://localhost:3000/carrinho";
  constructor(private http: HttpClient) { }
 
  buscarCarrinhoPeloIdDoUsuario(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id_user=${id}`);
  }
}
