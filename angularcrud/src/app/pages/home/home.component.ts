import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterLink } from '@angular/router';
import {  ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../carrinho';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  titulo:string="Bem-vindos!";


 produto: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produto: Produto[]) => {
      this.produto = produto;
    });
  }

}
