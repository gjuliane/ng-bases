import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';


  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
      // .pipe(
      //   catchError( err => of (['Hola mundo']))
      // );
  }

  buscarCapital = (termino: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisPorAlpha = (id: string): Observable<Country> => {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }


}
