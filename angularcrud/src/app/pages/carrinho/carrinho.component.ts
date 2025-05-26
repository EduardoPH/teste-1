// src/app/carrinho/carrinho.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from '../../core/services/types/types'; // Importe a interface Produto
import { MenuComponent } from '../../components/menu/menu.component';

// Se seu componente for standalone, descomente e adicione os imports necessários:
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
  standalone: true,
  imports: [MenuComponent]
})
export class CarrinhoComponent {
 
}