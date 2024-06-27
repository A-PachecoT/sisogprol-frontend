import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderInfoComponent } from './provider-info.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ProviderInfoComponent', () => {
  let component: ProviderInfoComponent;
  let fixture: ComponentFixture<ProviderInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderInfoComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
