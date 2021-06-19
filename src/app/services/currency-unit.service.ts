import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyUnitService {
  private currencyUnitSubject = new BehaviorSubject('USD');
  locale$ = this.currencyUnitSubject.asObservable();
  constructor() { }

  changeCurrencyUnit(unit: string) {
    this.currencyUnitSubject.next(unit);
  }
}
