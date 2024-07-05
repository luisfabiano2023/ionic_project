<<<<<<< HEAD
import { Component } from '@angular/core';
import { LancheService } from '../services/lanche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {

  lanches: any[] = [];

  constructor(
    private router: Router,
    private lancheService: LancheService,
  ) {}

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.listarLanches();
  }

  listarLanches() {
    this.lancheService.listarLanches().subscribe(
      data => {
        this.lanches = data;
        console.log('Lanches listados com sucesso', data);
      },
      error => {
        console.error('Erro ao listar lanches', error);
      }
    );
  }



}






=======
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadastroLancheModalComponent } from './cadastro-lanche-modal.component';

export interface Lanche {
  nome: string;
  descricao: string;
  imagem: string; // Armazena a imagem em base64
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page {
  lanches: Lanche[] = [];

  constructor(private modalController: ModalController) {}

  async openModal(lanche?: Lanche, index?: number) {
    const modal = await this.modalController.create({
      component: CadastroLancheModalComponent,
      componentProps: { lanche: lanche || { nome: '', descricao: '', imagem: '' } }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        if (typeof index === 'number') {
          this.lanches[index] = data.data;
        } else {
          this.lanches.push(data.data);
        }
      }
    });

    return await modal.present();
  }

  deleteLanche(index: number) {
    this.lanches.splice(index, 1);
  }
}






>>>>>>> 6adaa1ee6f82fb7562501ecd44aea7b6ac4e2a0a
