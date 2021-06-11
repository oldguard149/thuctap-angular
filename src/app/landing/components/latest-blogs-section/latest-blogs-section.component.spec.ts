import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlogsSectionComponent } from './latest-blogs-section.component';

describe('LatestBlogsSectionComponent', () => {
  let component: LatestBlogsSectionComponent;
  let fixture: ComponentFixture<LatestBlogsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBlogsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlogsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
