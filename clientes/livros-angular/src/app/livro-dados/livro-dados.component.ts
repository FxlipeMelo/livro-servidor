import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor (private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditora();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');

    this.servLivros.incluir(this.livro)
      .then(resposta => {
        this.router.navigateByUrl('/lista');
      })
      .catch(err => {
        console.error('Erro ao incluir livro', err);
      })
  }
}
