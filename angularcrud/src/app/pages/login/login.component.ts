import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../components/menu/menu.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormsModule, CommonModule, MenuComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  titulo = 'Faça seu Login!'
  login = ''
  senha = ''
  botaoDesabilitado: boolean = true;

  constructor(private router: Router) { }

  onBotaoClicado() {
    console.log(this.login, this.senha);
    if (this.login.trim() !== '' && this.senha.trim() !== '') {

      if (this.login == 'admin' && this.senha == '123') {
        alert(`Bem-vindo ${this.login} !`)
        localStorage.setItem('id_user', '1');
        this.router.navigate(['/'])
      } else {
        alert(`Dados Inválidos`)
      }

    }
    else {
      alert(`Preencha ambos os campos!`)
    }
  }
}
