import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalProductCardComponent } from './vertical-product-card.component';

describe('VerticalProductCardComponent', () => {
  let component: VerticalProductCardComponent;
  let fixture: ComponentFixture<VerticalProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
