import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  loading: boolean;
  info: any;
  constructor(public _infoPaginaService: InfoPaginaService) {}

  ngOnInit() {
    this.loading = true;
    this._infoPaginaService.cargarInfo().subscribe((data: any) => {
      this.loading = false;
      this.info = data;
    });
  }
}
