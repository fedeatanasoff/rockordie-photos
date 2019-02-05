import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';
import { Photo } from '../../../interfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: Photo;
  error: string;
  photoLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService
  ) {}

  ngOnInit() {
    this.photoLoading = true;
    this.route.params.subscribe(parametro => {
      this.photoService
        .obtenerFoto(parametro['id'])
        .subscribe((foto: Photo) => {
          this.photo = foto;
          this.photoLoading = false;
          console.log('foto que llego por id =>', this.photo);
        });
    });
  }
}
