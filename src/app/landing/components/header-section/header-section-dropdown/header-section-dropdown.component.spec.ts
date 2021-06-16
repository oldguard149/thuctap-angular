import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionDropdownComponent } from './header-section-dropdown.component';

describe('HeaderSectionDropdownComponent', () => {
  let component: HeaderSectionDropdownComponent;
  let fixture: ComponentFixture<HeaderSectionDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSectionDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSectionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
