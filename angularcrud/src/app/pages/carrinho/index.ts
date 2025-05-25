// src/app/types/index.ts
// Interface para seus produtos, baseada na seção 'produtos' do seu db.json
export interface Produto {
  id: string; // id é string no seu db.json para produtos
  nome: string;
  preco: number; // Adicionado para compatibilidade com seu frontend
  imagem?: string; // Adicionado para compatibilidade com seu frontend
}

// Interface para o item do carrinho, baseada na estrutura 'carrinho' do db.json do amigo
export interface CarrinhoItemApi {
  id: number;
  id_user: number;
  name: string;
  price: number;
}