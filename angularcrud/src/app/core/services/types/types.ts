export interface Pessoa {
  id: string;
  nome: string;
  sobrenome: string;
  dtNascimento: string; // formato ISO (ex: '2005-01-10')
}

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

export interface CarrinhoItem {
  id: number;
  id_user: number;
  name: string;
  price: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}


