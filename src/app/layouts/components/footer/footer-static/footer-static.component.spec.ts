import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterStaticComponent } from './footer-static.component';

describe('FooterStaticComponent', () => {
  let component: FooterStaticComponent;
  let fixture: ComponentFixture<FooterStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
