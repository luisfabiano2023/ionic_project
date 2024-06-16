import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastroVendedorPageRoutingModule } from './cadastro-vendedor-routing.module';
import { CadastroVendedorPage } from './cadastro-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroVendedorPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroVendedorPage]
})
export class CadastroVendedorPageModule {}

