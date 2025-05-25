// src/app/carrinho/carrinho.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../types'; // Importe a interface Produto

// Se seu componente for standalone, descomente e adicione os imports necessários:
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  // Se for standalone, adicione:
  // standalone: true,
  // imports: [CommonModule]
})
export class CarrinhoComponent {
  // O tipo dos itens no carrinho agora é Produto[]
  @Input() itens: Produto[] = []; 
  @Output() limpar = new EventEmitter<void>();

  get total(): number {
    // O cálculo do total continua usando item.preco
    return this.itens.reduce((acc, item) => acc + item.preco, 0); 
  }

  esvaziarCarrinho() {
    this.limpar.emit();
  }
}