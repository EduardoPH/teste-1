// src/app/core/services/itens.service.ts
import { Injectable } from "@angular/core";
import type { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import type { Produto } from "../../types"; // Importe a interface Produto agora

@Injectable({
  providedIn: "root",
})
export class ItensService {
  // Ajuste o URL para buscar seus produtos na sua seção 'produtos' do db.json
  private readonly apiUrl = "http://localhost:3001/produtos"; 

  constructor(private http: HttpClient) { }

  getAllItens(): Observable<Produto[]> { // O Observable agora retorna Produto[]
    return this.http.get<Produto[]>(this.apiUrl);
  }
}