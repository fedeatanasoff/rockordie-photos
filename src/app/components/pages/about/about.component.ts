import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any;
  loading: boolean;
  constructor(public _servicio: InfoPaginaService) {}

  ngOnInit() {
    this.loading = true;
    this._servicio.cargarInfo().subscribe((data: any) => {
      this.loading = false;
      this.about = data.about;
    });
  }
}
