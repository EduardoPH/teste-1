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

  constructor(private router:Router){ }

  onBotaoClicado() {

    if(this.login.trim() !== '' && this.senha.trim() !== ''){
      
      if(this.login == 'admin' && this.senha == '123'){
        alert(`Bem-vindo ${this.login} !`)
        this.router.navigate(['/pessoas'])
      }else{
        alert(`Dados Inválidos`)
      }
      
    }
    else{
      alert(`Preencha ambos os campos!`)
    }
}
}
