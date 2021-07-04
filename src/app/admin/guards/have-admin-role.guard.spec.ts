import { TestBed } from '@angular/core/testing';

import { HaveAdminRoleGuard } from './have-admin-role.guard';

describe('HaveAdminRoleGuard', () => {
  let guard: HaveAdminRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HaveAdminRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
