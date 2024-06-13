import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCotizacionComponent } from './generar-cotizacion.component';

describe('MainContentComponent', () => {
  let component: GenerarCotizacionComponent;
  let fixture: ComponentFixture<GenerarCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarCotizacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
