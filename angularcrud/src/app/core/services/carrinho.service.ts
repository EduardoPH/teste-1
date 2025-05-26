import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private readonly apiUrl = "http://localhost:3000/carrinho";
  private readonly apiPrudutoUrl = "http://localhost:3000/produtos";
  constructor(private http: HttpClient) { }

  buscarCarrinhoPeloIdDoUsuario(id: number): Observable<any[]> {
    const carrinho = this.http.get<any[]>(`${this.apiUrl}?id_user=${id}`).pipe(
      switchMap((carrinho: any[]) => {
        return forkJoin(
          carrinho.map((item) =>
            this.http.get<Produto>(`${this.apiPrudutoUrl}/${item.id_produto}`).pipe(
              map((produto) => ({
                ...item,
                produto
              }))
            )
          )
        );
      })
    );
    return carrinho;
  }

  adicionarProdutoAoCarrinho(idUser: number, idProduto: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { id_user: idUser, id_produto: idProduto });
  }

  removerProdutoDoCarrinho(idItemCarrinho: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${idItemCarrinho}`);
  }
}
