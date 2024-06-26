import { TestBed } from '@angular/core/testing';

import { CotizacionesService } from './cotizaciones.service';
import {HttpClientModule} from "@angular/common/http";

describe('CotizacionesService', () => {
  let service: CotizacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(CotizacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCotizaciones should return a list of cotizaciones', (done: DoneFn) => {
    service.getCotizaciones().subscribe(value => {
      expect(value).toBeInstanceOf(Array);
      expect(value.length).toBeGreaterThan(1);
      done();
    })
  })
});
