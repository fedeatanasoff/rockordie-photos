import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  photos: any = {};
  loading: boolean;
  error: string;
  constructor(public _photoService: PhotosService) {}

  ngOnInit() {
    this.loading = true;
    this._photoService.cargarPhotos().subscribe(data => {
      this.photos = data;
      this.loading = false;
      console.log('this fotos =>', this.photos);
    });
  }
}
