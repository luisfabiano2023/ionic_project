import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  
  email: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    // Implemente a lógica de login aqui
  }

}
