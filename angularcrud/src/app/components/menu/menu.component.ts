import { Component, Input, type SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() numeroDeItensNoCarrinho: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numeroDeItensNoCarrinho']) {
      const novoValor = changes['numeroDeItensNoCarrinho'].currentValue;
      console.log('Valor atualizado:', novoValor);
      // Execute aqui qualquer ação necessária
    }
  }
}
