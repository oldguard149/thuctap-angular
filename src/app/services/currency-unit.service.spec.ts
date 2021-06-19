import { TestBed } from '@angular/core/testing';

import { CurrencyUnitService } from './currency-unit.service';

describe('CurrencyUnitService', () => {
  let service: CurrencyUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
