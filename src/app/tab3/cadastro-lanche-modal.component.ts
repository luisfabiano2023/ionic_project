import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-lanche-modal',
  templateUrl: './cadastro-lanche-modal.component.html',
  styleUrls: ['./cadastro-lanche-modal.component.scss'],
})
export class CadastroLancheModalComponent {
  lanche = { nome: '', descricao: '', imagem: '' };

  constructor(private modalController: ModalController) {}

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
    this.modalController.dismiss(this.lanche);
  }
}



  

