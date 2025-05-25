import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input() nome!: string;
  @Input() preco!: number;
  @Input() imagem!: string;

  @Output() adicionar = new EventEmitter<{ nome: string, preco: number }>();

  adicionarAoCarrinho() {
    this.adicionar.emit({ nome: this.nome, preco: this.preco });
  }
}
