import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-masonry',
  templateUrl: './tarjeta-masonry.component.html',
  styleUrls: ['./tarjeta-masonry.component.css']
})
export class TarjetaMasonryComponent implements OnInit {
  @Input() photoInput: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  verPhoto(index: any) {
    this.router.navigate(['/photo', index]);
  }
}
