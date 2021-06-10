import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalNavButtonComponent } from './horizontal-nav-button.component';

describe('HorizontalNavButtonComponent', () => {
  let component: HorizontalNavButtonComponent;
  let fixture: ComponentFixture<HorizontalNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalNavButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
