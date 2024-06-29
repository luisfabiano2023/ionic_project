import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

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
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  onCadastro() {
    // Simulação básica de cadastro
    console.log('Cadastro realizado com sucesso!');
    this.presentAlert('Cadastro realizado com sucesso!');
    // Redireciona para a página inicial
    this.navCtrl.navigateRoot('/');
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
