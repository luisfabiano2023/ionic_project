import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LancheService, Lanche } from 'src/app/lanche/lanche.service';

@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage implements OnInit {
  lanche: Lanche = {
    nome: '',
    descricao: '',
    preco: 0,
    categoria: '',
    status: '',
    imagem: ''
  };

  lanches: Lanche[] = [];

  constructor(private lancheService: LancheService, private router: Router) {}

  ngOnInit() {
    this.loadLanches();
  }

  voltarParaPaginaInicial() {
    this.router.navigate(['/home']);
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.lanche.imagem = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  cadastrarLanche() {
    console.log('Cadastrando lanche:', this.lanche);
    this.lancheService.createLanche(this.lanche).subscribe(
      (response: Lanche) => {
        console.log('Lanche cadastrado:', response);
        this.router.navigate(['/cardapio']);
      },
      (error: any) => {
        console.error('Erro ao cadastrar lanche:', error);
      }
    );
  }
  
  

  loadLanches() {
    this.lancheService.getLanches().subscribe(
      (response: Lanche[]) => {
        this.lanches = response;
      },
      (error: any) => {
        console.error('Erro ao carregar lanches:', error);
      }
    );
  }
}





