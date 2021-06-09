import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeaderTopnavComponent } from './section-header-topnav.component';

describe('SectionHeaderTopnavComponent', () => {
  let component: SectionHeaderTopnavComponent;
  let fixture: ComponentFixture<SectionHeaderTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeaderTopnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeaderTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
