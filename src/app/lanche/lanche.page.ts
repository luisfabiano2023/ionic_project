import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage {
  lanche = {
    nome: '',
    preco: '',
    descricao: '',
    categoria: '',
    status: '',
    imagem: null
  };

  constructor( private router: Router) { }
  



  onSubmit() {
    console.log('Lanche cadastrado:', this.lanche);
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
  }

  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/');
  }

}