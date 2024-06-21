import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lanche } from './lanche';

@Injectable({
  providedIn: 'root'
})
export class LancheService {

  private apiUrl = ''; //aqui, entre as aspas simples vai a url da api

  constructor(private http: HttpClient) { }

  getLanches(): Observable<Lanche[]> {
    return this.http.get<Lanche[]>(`${this.apiUrl}/lanches`);
  }
}
