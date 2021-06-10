import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaydealsProductCardComponent } from './todaydeals-product-card.component';

describe('TodaydealsProductCardComponent', () => {
  let component: TodaydealsProductCardComponent;
  let fixture: ComponentFixture<TodaydealsProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaydealsProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaydealsProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
