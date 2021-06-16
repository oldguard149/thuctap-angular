import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionTopComponent } from './header-section-top.component';

describe('HeaderSectionTopComponent', () => {
  let component: HeaderSectionTopComponent;
  let fixture: ComponentFixture<HeaderSectionTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSectionTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
