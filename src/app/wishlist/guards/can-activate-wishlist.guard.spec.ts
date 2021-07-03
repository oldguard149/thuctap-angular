import { TestBed } from '@angular/core/testing';

import { CanActivateWishlistGuard } from './can-activate-wishlist.guard';

describe('CanActivateWishlistGuard', () => {
  let guard: CanActivateWishlistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateWishlistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
