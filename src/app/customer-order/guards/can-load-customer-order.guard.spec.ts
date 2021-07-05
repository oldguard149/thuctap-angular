import { TestBed } from '@angular/core/testing';

import { CanLoadCustomerOrderGuard } from './can-load-customer-order.guard';

describe('CanLoadCustomerOrderGuard', () => {
  let guard: CanLoadCustomerOrderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadCustomerOrderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
