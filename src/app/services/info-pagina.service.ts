import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  _info: InfoPagina;
  _cargada = false;

  _about: any;

  constructor(private _http: HttpClient) {
    this.cargarInfo();
    this.cargarAbout();
  }

  private cargarInfo(): void {
    this._http
      .get('assets/data/data-pagina.json')
      .subscribe((data: InfoPagina) => {
        this._cargada = true;
        this._info = data;
      });
  }

  public cargarAbout() {
    this._http
      .get('https://rockordie-photos.firebaseio.com/about.json')
      .subscribe(data => {
        this._about = data;
        // console.log(data);
      });
  }
}
