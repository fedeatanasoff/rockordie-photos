import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../../services/photos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id: string;
  constructor(
    private route: ActivatedRoute,
    public photoService: PhotosService
  ) {}

  ngOnInit() {
    this.id = null;
    this.route.params.subscribe(parametro => {
      this.id = parametro['termino'];
      this.photoService.buscarFotos(parametro['termino']);
    });
  }
}
