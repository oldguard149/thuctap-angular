import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductsSectionComponent } from './feature-products-section.component';

describe('FeatureProductsSectionComponent', () => {
  let component: FeatureProductsSectionComponent;
  let fixture: ComponentFixture<FeatureProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProductsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
