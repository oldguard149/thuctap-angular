import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeIconsComponent } from './three-icons.component';

describe('ThreeIconsComponent', () => {
  let component: ThreeIconsComponent;
  let fixture: ComponentFixture<ThreeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
