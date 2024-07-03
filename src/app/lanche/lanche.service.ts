import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Lanche {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  status: string;
  imagem: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancheService {
  private apiUrl = 'http://127.0.0.1:8000/criar/produto';

  constructor(private http: HttpClient) {}

  getLanches(): Observable<Lanche[]> {
    return this.http.get<Lanche[]>(this.apiUrl);
  }

  createLanche(lanche: Lanche): Observable<Lanche> {
    return this.http.post<Lanche>(this.apiUrl, lanche);
  }
}



