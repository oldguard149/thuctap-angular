import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavDropdownComponent } from './categories-nav-dropdown.component';

describe('CategoriesNavDropdownComponent', () => {
  let component: CategoriesNavDropdownComponent;
  let fixture: ComponentFixture<CategoriesNavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesNavDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
