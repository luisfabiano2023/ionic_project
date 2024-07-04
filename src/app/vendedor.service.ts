import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  private vendedores = [
    { id: '1', nome: 'João', email: 'joao@example.com', telefone: '123456789' },
    { id: '2', nome: 'Maria', email: 'maria@example.com', telefone: '987654321' }
  ];

  constructor() {}

  getAllVendedores() {
    return this.vendedores;
  }

  getVendedorById(id: string) {
    return this.vendedores.find(v => v.id === id);
  }

  updateVendedor(vendedor: any) {
    const index = this.vendedores.findIndex(v => v.id === vendedor.id);
    if (index !== -1) {
      this.vendedores[index] = vendedor;
    }
  }

  deleteVendedor(id: string) {
    this.vendedores = this.vendedores.filter(v => v.id !== id);
  }
}
