// src/app/loja/loja.component.ts
import { Component, OnInit } from '@angular/core';
import { ItensService } from '../core/services/itens.service'; // Importe o serviço
import { Produto } from '../types'; // Importe a interface Produto

// Se seu componente for standalone, descomente e adicione os imports necessários:
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { ProdutoComponent } from '../produto/produto.component';
// import { CarrinhoComponent } from '../carrinho/carrinho.component';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
  // Se for standalone, adicione:
  // standalone: true,
  // imports: [CommonModule, HttpClientModule, ProdutoComponent, CarrinhoComponent],
  // providers: [ItensService] // Adicione o serviço nos providers do componente se for standalone
})
export class LojaComponent implements OnInit { // Implemente OnInit
  produtos: Produto[] = []; // O tipo agora é Produto[]
  carrinho: Produto[] = []; // Seu carrinho no frontend ainda é de Produto[]

  constructor(private itensService: ItensService) { }

  ngOnInit() {
    // Carregar produtos da API usando o serviço
    this.itensService.getAllItens().subscribe((produtosApi: Produto[]) => {
      this.produtos = produtosApi;
      console.log('Produtos carregados da API:', this.produtos);
    }, error => {
      console.error('Erro ao carregar produtos da API:', error);
      // Fallback para produtos hardcoded se a API falhar
      // Certifique-se de que a estrutura corresponde à interface Produto
      this.produtos = [
        { id: "1", nome: 'Tênis de Treino Masculino (Fallback)', preco: 299.99, imagem: 'assets/images/tenis_treino_masculino.avif' },
        { id: "2", nome: 'Tênis Nike Masculino (Fallback)', preco: 499.99, imagem: 'assets/images/tenis_nike_masculino.avif' }
      ];
    });
  }

  // O item recebido agora é do tipo Produto
  adicionarAoCarrinho(item: Produto) { 
    this.carrinho.push(item);
  }

  limparCarrinho() {
    this.carrinho = [];
  }
}