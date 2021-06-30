import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaydealsLargeProductCardComponent } from './todaydeals-large-product-card.component';

describe('TodaydealsLargeProductCardComponent', () => {
  let component: TodaydealsLargeProductCardComponent;
  let fixture: ComponentFixture<TodaydealsLargeProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaydealsLargeProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaydealsLargeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
