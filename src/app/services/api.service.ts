// src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; // substitua pelo URL da sua API

  constructor(private http: HttpClient, private authService: AuthService) {}

  private async getHeaders() {
    const token = await this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  async getVendors(): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.get(`${this.apiUrl}/listar/vendedores/`, { headers });
  }

  async createVendor(data: any): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.post(`${this.apiUrl}/criar/vendedor/`, data, { headers });
  }

  async getProducts(): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.get(`${this.apiUrl}/listar/produtos/`, { headers });
  }

  async createProduct(data: any): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.post(`${this.apiUrl}/criar/produto/`, data, { headers });
  }

  async getClients(): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.get(`${this.apiUrl}/listar/clientes/`, { headers });
  }

  async createClient(data: any): Promise<Observable<any>> {
    const headers = await this.getHeaders();
    return this.http.post(`${this.apiUrl}/criar/cliente/`, data, { headers });
  }
}
