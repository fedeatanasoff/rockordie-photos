import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaMasonryComponent } from './tarjeta-masonry.component';

describe('TarjetaMasonryComponent', () => {
  let component: TarjetaMasonryComponent;
  let fixture: ComponentFixture<TarjetaMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
