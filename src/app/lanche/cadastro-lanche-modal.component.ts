import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LancheService, Lanche } from 'src/app/lanche/lanche.service';

@Component({
  selector: 'app-cadastro-lanche-modal',
  templateUrl: './cadastro-lanche-modal.component.html',
  styleUrls: ['./cadastro-lanche-modal.component.scss'],
})
export class CadastroLancheModalComponent {
  lanche: Lanche = { id: 0, nome: '', descricao: '', preco: 0, categoria: '', status: '', imagem: '' };

  constructor(
    private modalController: ModalController,
    private lancheService: LancheService
  ) {}

  closeModal() {
    this.modalController.dismiss();
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
    this.lancheService.adicionarLanche(this.lanche).subscribe(
      response => {
        console.log('Lanche cadastrado com sucesso:', response);
        this.modalController.dismiss(response);
      },
      error => {
        console.error('Erro ao cadastrar lanche:', error);
      }
    );
  }
}
