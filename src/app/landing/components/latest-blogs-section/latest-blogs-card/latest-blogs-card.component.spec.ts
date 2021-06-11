import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogsCardComponent } from './latest-blogs-card.component';

describe('LatestBlogsCardComponent', () => {
  let component: LatestBlogsCardComponent;
  let fixture: ComponentFixture<LatestBlogsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
