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

}