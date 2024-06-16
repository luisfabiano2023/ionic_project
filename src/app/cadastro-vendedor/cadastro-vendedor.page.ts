import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-vendedor',
  templateUrl: './cadastro-vendedor.page.html',
  styleUrls: ['./cadastro-vendedor.page.scss'],
})
export class CadastroVendedorPage implements OnInit {

  vendedorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.vendedorForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.vendedorForm.valid) {
      console.log('Form Submitted', this.vendedorForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    } else {
      console.log('Form is not valid');
    }
  }
}

