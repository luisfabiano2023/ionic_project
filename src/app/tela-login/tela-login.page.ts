import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  
  email: string = '';
  senha: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async onLogin() {
    // Simulação básica de validação de login
    if (this.email === 'usuario@email.com' && this.senha === 'senha123') {
      // Lógica de login bem-sucedido
      console.log('Login bem-sucedido!');
      await this.presentAlert('Login bem-sucedido!');
      this.navCtrl.navigateRoot('/'); // Redireciona para a página inicial
    } else {
      // Exibir um alerta de erro em caso de credenciais incorretas
      await this.presentAlert('Credenciais inválidas. Por favor, verifique seu email e senha.');
    }
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
