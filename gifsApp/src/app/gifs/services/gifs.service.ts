import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'BiEaNRyHelnFYjYkoAKGZeff5wfDK93T';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _resultados: Gif[] = [];

  // TODO: cambiar any por su tió
  // public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  get resultados(){
    return this._resultados;
  }

  constructor(private http: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    this._resultados = JSON.parse(localStorage.getItem('ultimoResultado')!) || [];

    // if ( localStorage.getItem('historial')) {
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }
  }

  buscarGifs(query: string = '') {
    if (query.trim().length == 0) {
      return;
    }
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    console.log(this._historial);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q' ,query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
      .subscribe( (response: SearchGifsResponse) => {
        console.log(response.data);
        this._resultados = response.data;
        localStorage.setItem('ultimoResultado', JSON.stringify(response.data));
      });
  }
}
