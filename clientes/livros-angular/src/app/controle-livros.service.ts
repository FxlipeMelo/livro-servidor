import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = "http://localhost:3030/livros";

export interface LivroMongo {
  _id?: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  constructor() {}

  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL, {method: 'GET'});
    const dados: LivroMongo[] = await resposta.json();

    const livros: Livro[] = dados.map((lm) => {
    const livro = new Livro();
    livro.codigo = lm._id || '';
    livro.codEditora = lm.codEditora;
    livro.titulo = lm.titulo;
    livro.resumo = lm.resumo;
    livro.autores = lm.autores;
    return livro;
  });

  return livros; 
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo)
    });

    return resposta.ok;
  }


  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }


}
