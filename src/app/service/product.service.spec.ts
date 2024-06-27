import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {HttpClientModule} from "@angular/common/http";

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProducts should return a list of products', (done: DoneFn) => {
    service.getProducts().subscribe(value => {
      expect(value).toBeInstanceOf(Array);
      expect(value.length).toBeGreaterThan(1);
      done();
    })
  })
});
