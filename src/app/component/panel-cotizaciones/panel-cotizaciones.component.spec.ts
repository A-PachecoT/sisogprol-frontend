import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCotizacionesComponent } from './panel-cotizaciones.component';
import {HttpClientModule} from "@angular/common/http";

describe('PanelCotizacionesComponent', () => {
  let component: PanelCotizacionesComponent;
  let fixture: ComponentFixture<PanelCotizacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCotizacionesComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
