import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerSectionComponent } from './best-seller-section.component';

describe('BestSellerSectionComponent', () => {
  let component: BestSellerSectionComponent;
  let fixture: ComponentFixture<BestSellerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
