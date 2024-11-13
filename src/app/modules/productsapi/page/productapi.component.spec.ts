import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductapiComponent } from './productapi.component';

describe('ProductapiComponent', () => {
  let component: ProductapiComponent;
  let fixture: ComponentFixture<ProductapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
