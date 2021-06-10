import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDealsSectionComponent } from './today-deals-section.component';

describe('TodayDealsSectionComponent', () => {
  let component: TodayDealsSectionComponent;
  let fixture: ComponentFixture<TodayDealsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayDealsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayDealsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
