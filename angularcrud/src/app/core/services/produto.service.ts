import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }


  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API)
  }


}
