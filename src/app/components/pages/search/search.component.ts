import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public photoService: PhotosService
  ) {}

  ngOnInit() {
    // this.route.params.subscribe(parametro => {
    //   console.log(parametro['termino']);
    //   this.photoService.buscarPhoto(parametro['termino']);
    // });
  }
}
