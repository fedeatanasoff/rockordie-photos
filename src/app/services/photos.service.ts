import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  cargando = true;
  fotos: Photo[] = [];
  fotosFiltradas: Photo[] = [];
  cargandoFiltrada = true;
  busquedaVacia: string;
  constructor(private http: HttpClient) {
    this.cargarPhotos();
  }

  public cargarPhotos() {
    return new Promise((resolve, reject) => {
      this.http
        .get('https://rockordie-photos.firebaseio.com/photos_idx.json')
        .subscribe((data: Photo[]) => {
          this.cargando = false;
          this.fotos = data;
          resolve();
        });
    });
  }

  buscarPhoto(termino: string) {
    this.busquedaVacia = null;
    if (this.fotosFiltradas.length === 0) {
      this.cargarPhotos().then(() => {
        this.cargandoFiltrada = false;
        this.filtrarPhoto(termino);
        if (this.fotosFiltradas.length === 0) {
          this.busquedaVacia = `No se encontraron resultados para : ${termino}`;
        }
      });
    } else {
      this.cargandoFiltrada = false;
      this.filtrarPhoto(termino);
    }

    // console.log(this.fotosFiltradas);
  }

  private filtrarPhoto(termino: string) {
    const palabra = termino.toLowerCase();
    this.fotosFiltradas = this.fotos.filter(
      foto => foto.titulo.toLocaleLowerCase().indexOf(palabra) >= 0
    );
  }

  // getPhotos(): Observable<Photo> {
  //   return this.http.get<Photo>(
  //     'https://rockordie-photos.firebaseio.com/photos_idx.json'
  //   );
  // }

  getPhoto(id: number) {
    return this.http.get(
      `https://rockordie-photos.firebaseio.com/photos/${id}.json`
    );
  }
}
