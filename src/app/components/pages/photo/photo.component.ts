import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: any;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotosService
  ) {}

  ngOnInit() {
    // this.route.params.subscribe(parametros => {
    //   console.log('parametro =>', parametros);
    //   this.photoService.getPhoto(parametros['id']).subscribe((foto: any) => {
    //     this.photo = foto;
    //     // this.id = parametros['id'];
    //     console.log('tratando de ver si llega el objeto =>', this.photo);
    //   });
    // });
  }
}
