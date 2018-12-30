import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  cargando = true;
  fotos: Photo[] = [];
  constructor(private http: HttpClient) {
    this.cargarPhotos();
  }

  private cargarPhotos() {
    this.http
      .get('https://rockordie-photos.firebaseio.com/photos_idx.json')
      .subscribe((data: Photo[]) => {
        this.cargando = false;
        this.fotos = data;
        console.log(data);
      });
  }
}
