import { Injectable } from '@angular/core'; // Importa o decorator Injectable do Angular
import { HttpClient } from '@angular/common/http'; // Importa o cliente HTTP do Angular
import { Observable } from 'rxjs'; // Importa a classe Observable do RxJS

@Injectable({
  providedIn: 'root' // Declara que este serviço será fornecido na raiz da aplicação
})
export class ApiService {

  constructor(private http: HttpClient) {} // Injeta o HttpClient no construtor

  // Método genérico para requisições GET
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url); // Faz a requisição GET e retorna um Observable
  }

  // Método genérico para requisições POST
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body); // Faz a requisição POST com o corpo fornecido e retorna um Observable
  }

  // Método genérico para requisições PUT
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body); // Faz a requisição PUT com o corpo fornecido e retorna um Observable
  }

  // Método genérico para requisições DELETE
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url); // Faz a requisição DELETE e retorna um Observable
  }
}