import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardActionComponent } from './product-card-action.component';

describe('ProductCardActionComponent', () => {
  let component: ProductCardActionComponent;
  let fixture: ComponentFixture<ProductCardActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
