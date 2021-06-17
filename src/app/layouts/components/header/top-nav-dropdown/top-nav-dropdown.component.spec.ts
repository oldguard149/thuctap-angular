import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavDropdownComponent } from './top-nav-dropdown.component';

describe('TopNavDropdownComponent', () => {
  let component: TopNavDropdownComponent;
  let fixture: ComponentFixture<TopNavDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
