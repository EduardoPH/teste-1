// src/app/carrinho/carrinho.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../core/services/types/types'; // Importe a interface Produto
import { MenuComponent } from '../../components/menu/menu.component';
import { CarrinhoService } from '../../core/services/carrinho.service';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  standalone: true,
  imports: [MenuComponent]
})
export class CarrinhoComponent {
  constructor(private carrinhoService: CarrinhoService) { }
  carrinho: any[] = [];
  valorTotal: number = 0.00;
  numeroDeItensNoCarrinho: number = 0;

  idUser: number = localStorage.getItem('id_user') ? parseInt(localStorage.getItem('id_user')!) : 1;

  onAtualizarValorTotal(): void {
    this.valorTotal = this.carrinho.reduce((total, item) => {
      return total + (item.produto.preco);
    }, 0);
  }

  onAtualizarNumeroDeItensNoCarrinho(): void {
    this.carrinhoService.buscarCarrinhoPeloIdDoUsuario(this.idUser).subscribe((carrinho: any[]) => {
      this.numeroDeItensNoCarrinho = carrinho.length;
      this.carrinho = carrinho.map(item => ({
        ...item,
        produto: item.produto || {}
      }));
    });
  }

  ngOnInit() {
    const idUsuario = localStorage.getItem('id_user');
    this.carrinhoService.buscarCarrinhoPeloIdDoUsuario(Number(idUsuario)).subscribe((carrinho) => {
      this.carrinho = carrinho;
      this.onAtualizarNumeroDeItensNoCarrinho();
      this.onAtualizarValorTotal();
    });
  }

  removerDoCarrinho(idItemCarrinho: number): void {
    if (!confirm(`Você tem certeza que deseja remover este item do carrinho?`)) return;
    this.carrinho = this.carrinho.filter(item => item.id !== idItemCarrinho);
    this.numeroDeItensNoCarrinho = this.carrinho.length;
    this.onAtualizarValorTotal()
    this.carrinhoService.removerProdutoDoCarrinho(idItemCarrinho).subscribe(() => {
      alert(`Item removido com sucesso!`);
      this.onAtualizarNumeroDeItensNoCarrinho();
    });
  }
}