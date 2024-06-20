import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private route:Router) {}


  telalogin(){
    this.route.navigate(['./tela-login']);
  }
  telacadastro(){
    this.route.navigate(['./tela-cadastro'])
  }

}
