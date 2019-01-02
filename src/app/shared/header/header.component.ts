import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private _infoPaginaService: InfoPaginaService,
    private router: Router
  ) {}

  ngOnInit() {}

  buscar(termino: string) {
    if (termino.length < 1) {
      return;
    }

    this.router.navigate(['/buscar', termino]);

    console.log(termino);
  }
}
