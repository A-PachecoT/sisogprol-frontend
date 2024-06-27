import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionComponent } from './product-selection.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ProductSelectionComponent', () => {
  let component: ProductSelectionComponent;
  let fixture: ComponentFixture<ProductSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSelectionComponent, HttpClientModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
