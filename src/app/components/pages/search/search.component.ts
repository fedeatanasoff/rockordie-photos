import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  palabra: string;
  constructor(
    private route: ActivatedRoute,
    public photoService: PhotosService
  ) {}

  ngOnInit() {
    this.palabra = null;
    this.route.params.subscribe(parametro => {
      this.palabra = parametro['termino'];
      this.photoService.buscarFotos(parametro['termino']);
    });
  }
}
