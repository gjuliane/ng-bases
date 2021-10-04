import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Heroe } from '../interfaces/heroes.interface';
export { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl:string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes`);
  }

  getHeroePorId(id:string):Observable<Heroe>{
    return this.http.get<Heroe>(`${this.apiUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.apiUrl}/heroes?q=${termino}&_limit=6`);
  }
  
  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.apiUrl}/heroes`, heroe);
  }
  actualizarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.apiUrl}/heroes/${heroe.id}`, heroe);
  }
}
