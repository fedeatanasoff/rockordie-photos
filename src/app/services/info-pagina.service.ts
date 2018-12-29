import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  _info: InfoPagina;
  _cargada = false;

  constructor(private _http: HttpClient) {
    this._http
      .get('assets/data/data-pagina.json')
      .subscribe((data: InfoPagina) => {
        this._cargada = true;
        this._info = data;
        console.log(data);
      });
  }
}
