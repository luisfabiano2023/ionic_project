import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.page.html',
  styleUrls: ['./tela-cadastro.page.scss'],
})
export class TelaCadastroPage {

  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor() { }

  onCadastro() {
    // Lógica para cadastro aqui
  }
}
