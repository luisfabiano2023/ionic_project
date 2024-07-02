import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { VendedorService } from '../services/vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.page.html',
  styleUrls: ['./tela-cadastro.page.scss'],
})
export class TelaCadastroPage {

  nome: string = '';
  email: string = '';
  telefone: string = '';
  cpfCnpj: string = '';
  linkContato: string = '';
  senha: string = '';

  constructor(
    private vendedorService: VendedorService, 
    private router: Router,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  onCadastro() {
    const vendedor = {
      user: {
        username: this.nome,
        email: this.email,
        password: this.senha,
      },
      telefone_vendedor: this.telefone,
      cpf_cnpj_vendedor: this.cpfCnpj,
      link_contato: this.linkContato,
    };

    this.vendedorService.cadastrarVendedor(vendedor).subscribe(
      response => {
        console.log('Vendedor cadastrado com sucesso', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erro ao cadastrar vendedor', error);
      }
    );
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  voltarParaPaginaInicial() {
    this.navCtrl.navigateRoot('/');
  }

}
