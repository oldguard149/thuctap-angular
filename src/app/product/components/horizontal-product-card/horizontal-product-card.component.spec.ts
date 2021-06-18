import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalProductCardComponent } from './horizontal-product-card.component';

describe('HorizontalProductCardComponent', () => {
  let component: HorizontalProductCardComponent;
  let fixture: ComponentFixture<HorizontalProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
