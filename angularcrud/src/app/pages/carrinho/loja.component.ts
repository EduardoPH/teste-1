import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {
  produtos = [
    { nome: 'Tênis Nike', preco: 499.99, imagem: 'assets/images/tenis.avif' },
    { nome: 'Tênis Adidas', preco: 399.99, imagem: 'assets/images/adidas.avif' },
    { nome: 'Tênis Puma', preco: 449.99, imagem: 'assets/images/mizuno.png' }
  ];

  carrinho: { nome: string, preco: number }[] = [];

  adicionarAoCarrinho(item: { nome: string, preco: number }) {
    this.carrinho.push(item);
  }

  limparCarrinho() {
    this.carrinho = [];
  }
}
