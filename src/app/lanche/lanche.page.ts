import { Component } from '@angular/core';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage {
  lanche = {
    nome: '',
    descricao: '',
    preco: 0,
    categoria: '',
    imagem: null
  };

  constructor() { }



  onSubmit() {
    console.log('Lanche cadastrado:', this.lanche);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
  }
}