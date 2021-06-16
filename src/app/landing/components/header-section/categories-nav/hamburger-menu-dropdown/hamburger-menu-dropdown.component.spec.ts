import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuDropdownComponent } from './hamburger-menu-dropdown.component';

describe('HamburgerMenuDropdownComponent', () => {
  let component: HamburgerMenuDropdownComponent;
  let fixture: ComponentFixture<HamburgerMenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerMenuDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
