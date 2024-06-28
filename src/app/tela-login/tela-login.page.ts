import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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
    private alertController: AlertController,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  async onLogin() {
    try {
      const response = await this.authService.login(this.email, this.senha).toPromise();
      await this.authService.setToken(response.access);
      await this.presentAlert('Login bem-sucedido!');
      this.navCtrl.navigateRoot('/'); // Redireciona para a página inicial
    } catch (error) {
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

