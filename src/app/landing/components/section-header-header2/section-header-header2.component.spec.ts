import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeaderHeader2Component } from './section-header-header2.component';

describe('SectionHeaderHeader2Component', () => {
  let component: SectionHeaderHeader2Component;
  let fixture: ComponentFixture<SectionHeaderHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeaderHeader2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeaderHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
