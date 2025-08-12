import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor (private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) { };

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditora();
    this.servLivros.obterLivros()
      .then(livros => this.livros = livros)
      .catch(err => console.error('Erro ao obter livros', err));
  }

  excluir = (codigo: string): void => {
    this.servLivros.excluir(codigo)
    .then(() => this.servLivros.obterLivros())
    .then(livrosAtualizados => this.livros = livrosAtualizados)
    .catch(err => console.error('Erro ao excluir o livro', err));
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
