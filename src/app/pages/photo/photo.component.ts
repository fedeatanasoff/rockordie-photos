import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { PhotoDescription } from '../../interfaces/photo-description';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: PhotoDescription;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.photoService
        .getPhoto(parametros['id'])
        .subscribe((foto: PhotoDescription) => {
          this.photo = foto;
          this.id = parametros['id'];
          // console.log(foto);
        });
    });
  }
}
