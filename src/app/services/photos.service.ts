import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photosURL = `https://rockordie-photos.firebaseio.com/photos.json`;
  photoURL = `https://rockordie-photos.firebaseio.com/photos`;

  cargando = true;
  fotos: any;
  fotosFiltradas: any[] = [];
  cargandoFiltrada = true;
  busquedaVacia: string;
  constructor(private http: HttpClient) {
    this.cargarPhotos();
  }

  public cargarPhotos() {
    // return new Promise((resolve, reject) => {
    //   this.http
    //     .get('https://rockordie-photos.firebaseio.com/photos.json')
    //     .subscribe((data: Photo[]) => {
    //       this.cargando = false;
    //       this.fotos = data;
    //       resolve();
    //     });
    // });
    // imagen: string;
    return this.http
      .get('https://rockordie-photos.firebaseio.com/photos.json')
      .pipe(
        map((foto: Photo) => {
          this.fotos = foto;
          console.log(this.fotos);
          return foto;
        })
      );
  }

  getPhoto(key$: string) {
    const url = `${this.photoURL}/${key$}.json`;

    return this.http.get(url).pipe(
      map((foto: Photo) => {
        console.log('getPhoto =>', foto);
        return foto;
      })
    );
  }

  // buscarPhoto(termino: string) {
  //   this.busquedaVacia = null;
  //   if (this.fotosFiltradas.length === 0) {
  //     this.cargarPhotos().then(() => {
  //       this.cargandoFiltrada = false;
  //       this.filtrarPhoto(termino);
  //       if (this.fotosFiltradas.length === 0) {
  //         this.busquedaVacia = `No se encontraron resultados para : ${termino}`;
  //       }
  //     });
  //   } else {
  //     this.cargandoFiltrada = false;
  //     this.filtrarPhoto(termino);
  //   }

  //   // console.log(this.fotosFiltradas);
  // }

  // private filtrarPhoto(termino: string) {
  //   const palabra = termino.toLowerCase();
  //   this.fotosFiltradas = this.fotos.filter(
  //     foto => foto.titulo.toLocaleLowerCase().indexOf(palabra) >= 0
  //   );
  // }

  // getPhotos(): Observable<Photo> {
  //   return this.http.get<Photo>(
  //     'https://rockordie-photos.firebaseio.com/photos.json'
  //   );
  // }

  // getPhoto(id: number) {
  //   return this.http.get(
  //     `https://rockordie-photos.firebaseio.com/photos/${id}.json`
  //   );
  // }
}
