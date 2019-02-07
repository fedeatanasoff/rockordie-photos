import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  constructor(private _http: HttpClient) {}

  cargarInfo() {
    return this._http.get('./assets/data/data-pagina.json');
  }
}
