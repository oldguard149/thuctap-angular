import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerCardComponent } from './best-seller-card.component';

describe('BestSellerCardComponent', () => {
  let component: BestSellerCardComponent;
  let fixture: ComponentFixture<BestSellerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
