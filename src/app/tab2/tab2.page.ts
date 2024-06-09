import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private route:Router) {}


  telalogin(){
    this.route.navigate(['./tela-login']);
  }
  telacadastro(){
    this.route.navigate(['./tela-cadastro'])
  }

  checarTipoUsuaio(){
    //função futura que deverá ser implementada
  }

}
