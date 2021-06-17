import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavPopupComponent } from './categories-nav-popup.component';

describe('CategoriesNavPopupComponent', () => {
  let component: CategoriesNavPopupComponent;
  let fixture: ComponentFixture<CategoriesNavPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesNavPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesNavPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
