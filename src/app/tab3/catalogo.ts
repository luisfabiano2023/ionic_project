import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadastroLancheModalComponent } from '\cadastro-lanche-modal.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage {
  lanches: { nome: string, descricao: string }[] = [];

  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: CadastroLancheModalComponent
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.lanches.push(data.data);
      }
    });

    return await modal.present();
  }
}

