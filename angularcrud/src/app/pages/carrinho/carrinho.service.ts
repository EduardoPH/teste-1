// src/app/core/services/carrinho.service.ts
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CarrinhoItemApi } from "../../types"; // Importado a nova interface CarrinhoItemApi

@Injectable({
  providedIn: "root",
})
export class CarrinhoService {
  private readonly apiUrl = "http://localhost:3001/carrinho"; // URL do carrinho do amigo

  constructor(private http: HttpClient) { }

  // Retorna um array de CarrinhoItemApi do db.json
  buscarCarrinhoPeloIdDoUsuario(id: number): Observable<CarrinhoItemApi[]> {
    return this.http.get<CarrinhoItemApi[]>(`${this.apiUrl}?id_user=${id}`);
  }
}