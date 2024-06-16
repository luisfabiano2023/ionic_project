import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroVendedorPage } from './cadastro-vendedor.page';

describe('CadastroVendedorPage', () => {
  let component: CadastroVendedorPage;
  let fixture: ComponentFixture<CadastroVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
