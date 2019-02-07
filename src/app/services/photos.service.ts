import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  cargandoFotos: boolean;
  photos: any[] = [];
  cargando = true;
  fotosFiltradas: any[] = [];

  constructor(private http: HttpClient) {
    this.cargar();
  }

  cargar() {
    this.cargandoFotos = true;
    return new Promise((resolve, reject) => {
      this.http
        .get('https://rockordie-photos.firebaseio.com/fotos.json')
        .subscribe((resp: any[]) => {
          this.cargandoFotos = false;
          this.photos = resp;

          resolve();
        });
    });
  }

  obtenerFoto(id: string) {
    return this.http.get(
      `https://rockordie-photos.firebaseio.com/fotos_id/${id}.json`
    );
  }

  buscarFotos(banda: string) {
    if (this.photos.length === 0) {
      this.cargar().then(() => {
        this.filtrarFotos(banda);
      });
    } else {
      this.filtrarFotos(banda);
    }
  }

  private filtrarFotos(banda: string) {
    console.log('filtrando =>', this.photos);

    const palabra = banda.toLowerCase();
    this.fotosFiltradas = this.photos.filter((foto: Photo) => {
      return foto.banda.toLocaleLowerCase().indexOf(palabra) >= 0;
    });
  }
}
