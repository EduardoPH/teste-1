import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/services/types/types';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent implements OnInit {

  listaProdutos: Produto[] = [];

  constructor(private service:ProdutoService){}

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    });
  }

}
