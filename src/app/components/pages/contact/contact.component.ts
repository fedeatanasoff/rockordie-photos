import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../../services/info-pagina.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info: any;
  loading: boolean;
  constructor(public _infoService: InfoPaginaService) {}

  ngOnInit() {
    this.loading = true;
    this._infoService.cargarInfo().subscribe((data: any) => {
      this.loading = false;
      this.info = data;
    });
  }
}
