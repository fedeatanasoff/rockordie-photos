import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // photos: Photo;
  // error: string;
  constructor(public _photoService: PhotosService) {}

  ngOnInit() {
    // this._photoService.getPhotos().subscribe(
    //   (data: Photo) => {
    //     this.photos = data;
    //   },
    //   error => {
    //     console.log('error al conectar con el servidor');
    //     this.error = 'Error al conectar con el servidor. Intente nuevamente';
    //   }
    // );
  }
}
