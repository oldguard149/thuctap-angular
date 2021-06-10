import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCountdownComponent } from './box-countdown.component';

describe('BoxCountdownComponent', () => {
  let component: BoxCountdownComponent;
  let fixture: ComponentFixture<BoxCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
