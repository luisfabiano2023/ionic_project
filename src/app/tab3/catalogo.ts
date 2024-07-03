import { Component, OnInit } from '@angular/core';
import { LancheService, Lanche } from 'src/app/lanche/lanche.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {
  lanches: Lanche[] = [];

  constructor(private lancheService: LancheService) {}

  ngOnInit() {
    this.carregarLanches();
  }

  carregarLanches() {
    this.lancheService.getLanches().subscribe(
      (data: Lanche[]) => {
        this.lanches = data;
      },
      (error: any) => {
        console.error('Erro ao carregar lanches:', error);
      }
    );
  }
}


