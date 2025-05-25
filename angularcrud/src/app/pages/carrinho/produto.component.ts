// src/app/produto/produto.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../types'; // Importe a interface Produto

// Se seu componente for standalone, descomente e adicione os imports necessários:
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  // Se for standalone, adicione:
  // standalone: true,
  // imports: [CommonModule]
})
export class ProdutoComponent {
  @Input() id!: string; // Adicionado Input para o ID do produto
  @Input() nome!: string; //
  @Input() preco!: number; //
  @Input() imagem!: string; //

  @Output() adicionar = new EventEmitter<Produto>(); // Emite um objeto Produto completo

  adicionarAoCarrinho() {
    // Cria e emite um objeto Produto com todas as propriedades
    this.adicionar.emit({ id: this.id, nome: this.nome, preco: this.preco, imagem: this.imagem }); 
  }
}