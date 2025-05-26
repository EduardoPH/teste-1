import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';
import type { Produto } from '../../core/services/types/types';
import { CarrinhoService } from '../../core/services/carrinho.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  titulo: string = "Bem-vindos!";
  idUser: number = localStorage.getItem('idUser') ? parseInt(localStorage.getItem('idUser')!) : 1;

  numeroDeItensNoCarrinho: number = 0;


  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService) { }

  onAtualizarNumeroDeItensNoCarrinho(): void {
    this.carrinhoService.buscarCarrinhoPeloIdDoUsuario(this.idUser).subscribe((carrinho: any[]) => {
      this.numeroDeItensNoCarrinho = carrinho.length;
    });
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    });

    this.onAtualizarNumeroDeItensNoCarrinho();

  }

  adicionarAoCarrinho(produto: Produto): void {
    this.carrinhoService.adicionarProdutoAoCarrinho(this.idUser, produto.id).subscribe(() => {
      alert(`Produto ${produto.nome} adicionado ao carrinho!`)
      this.onAtualizarNumeroDeItensNoCarrinho();
    });

  }



}
