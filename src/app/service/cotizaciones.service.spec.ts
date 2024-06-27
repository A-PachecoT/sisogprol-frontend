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
});
