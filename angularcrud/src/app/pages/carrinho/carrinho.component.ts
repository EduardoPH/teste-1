import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input() itens: { nome: string, preco: number }[] = [];
  @Output() limpar = new EventEmitter<void>();

  get total(): number {
    return this.itens.reduce((acc, item) => acc + item.preco, 0);
  }

  esvaziarCarrinho() {
    this.limpar.emit();
  }
}
