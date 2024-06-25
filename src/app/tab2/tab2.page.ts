import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nome_vendedor: string = '';
  email_vendedor: string = '';
  telefone_vendedor: string = '';
  cpf_cnpj_vendedor: string = '';
  link_contato: string = '';

  constructor() {}

  onEditar() {
    // Implementar a lógica de edição aqui
    console.log('Perfil editado com sucesso!');
    console.log('Nome:', this.nome_vendedor);
    console.log('Email:', this.email_vendedor);
    console.log('Telefone:', this.telefone_vendedor);
    console.log('CPF/CNPJ:', this.cpf_cnpj_vendedor);
    console.log('Link de Contato:', this.link_contato);
  }

  onExcluir() {
    // Implementar a lógica de exclusão aqui
    console.log('Perfil excluído com sucesso!');
    this.nome_vendedor = '';
    this.email_vendedor = '';
    this.telefone_vendedor = '';
    this.cpf_cnpj_vendedor = '';
    this.link_contato = '';
  }
}
