import { TestBed } from '@angular/core/testing';

import { PedidosService } from './pedidos.service';
import {HttpClientModule} from "@angular/common/http";

describe('PedidosService', () => {
  let service: PedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(PedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
