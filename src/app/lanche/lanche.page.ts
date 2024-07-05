<<<<<<< HEAD
import { Component } from '@angular/core';
import { LancheService } from '../services/lanche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage {

    nome_produto: string = '';
    preco: number = 0;
    descricao_produto: string = '';
    categoria: string = '';
    status_produto: string = '';
    imagem: string = '';

  constructor( 
    private router: Router,
    private lancheService: LancheService,
  ) { }


  onCadastro() {
    const lanche = {
      nome_produto: this.nome_produto,
      preco: this.preco,
      descricao_produto: this.descricao_produto,
      categoria: this.categoria,
      status_produto: this.status_produto,
      foto_produto: this.imagem,
    }
    console.log('Dados a serem enviados:', lanche); 
    this.lancheService.cadastrarLanche(lanche).subscribe(
      response => {
        console.log('Lanche cadastrado com sucesso', response);
        this.router.navigate(['/tabs/tab3']);
      },
      error => {
        console.error('Erro ao cadastrar lanche', error);
      }
    );
  }


  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/');
  }

=======
import { Component } from '@angular/core';
import { LancheService } from '../services/lanche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage {

  
    nome: string = '';
    preco: number = 0;
    descricao: string = '';
    categoria: string = '';
    status: string = '';
    imagem: string = '';

  constructor( 
    private router: Router,
    private lancheService: LancheService,
  ) { }


  onCadastro() {
    const lanche = {
      nome: this.nome,
      preco: this.preco,
      descricao: this.descricao,
      categoria: this.categoria,
      status: this.status,
      imagem: this.imagem,
    }
    this.lancheService.cadastrarLanche(lanche).subscribe(
      response => {
        console.log('Lanche cadastrado com sucesso', response);
        this.router.navigate(['/tabs/tab3']);
      },
      error => {
        console.error('Erro ao cadastrar lanche', error);
      }
    );
  }


  voltarParaPaginaInicial() {
    this.router.navigateByUrl('/');
  }

>>>>>>> 6adaa1ee6f82fb7562501ecd44aea7b6ac4e2a0a
}