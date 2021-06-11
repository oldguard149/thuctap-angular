import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductCardComponent } from './feature-product-card.component';

describe('FeatureProductCardComponent', () => {
  let component: FeatureProductCardComponent;
  let fixture: ComponentFixture<FeatureProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
