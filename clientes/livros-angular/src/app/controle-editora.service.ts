import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Rocco'},
    { codEditora: 2, nome: 'Editora Intrinseca'},
    { codEditora: 3, nome: 'Saraiva Educacao'}
  ];

  getNomeEditora(codEditora: number): string | undefined {
    const resultado = this.editoras.filter(editora => editora.codEditora === codEditora);

    if (resultado.length > 0) {
      return resultado[0].nome;
    } else {
      return undefined;
    }
  }

  getEditora(): Array<Editora> {
    return this.editoras;
  }
}
